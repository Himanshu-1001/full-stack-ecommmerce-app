("use strict");
const stripe = require("stripe")("sk_test_51OfP7bSB0eSKnOFESuUPs1E5WDnCjMmW7DSfp06N402NsD7JV73nykN2Km2eWOTdwOrc5B8cnhIaMNDowWn4Xb4J00AyqISrUl");
/**
 * order controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        products.map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.Title,
              },
              unit_amount: item.Price * 100,
            },
            quantity: product.attributes.quantity,
          };
        })
      );

      const session = await stripe.checkout.sessions.create({
        shipping_address_collection: { allowed_countries: ["US"] },
        payment_method_types: ["card"],
        mode: "payment",
        success_url: process.env.CLIENT_URL + "/success",
        cancel_url: process.env.CLIENT_URL + "?success=false",
        line_items: lineItems,
      });

      await strapi
        .service("api::order.order")
        .create({ data: { products, stripeId: session.id } });

      return { stripeSession: session };
    } catch (error) {
      ctx.response.status = 500;
      console.log(error);
      return { error };
    }
  },
}));