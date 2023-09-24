// deno-lint-ignore-file no-explicit-any
import { Composer, Context } from "grammy";
import topics from "../../data/topics.json" assert { type: "json" };

const composer = new Composer();

composer.on("message:text", async (ctx: Context): Promise<any> => {
  if (
    ctx.chat!.id === -1001303954475 &&
    ctx.message!.message_thread_id === topics["news"]
  ) {
    return await ctx.deleteMessage();
  }

  if (
    ctx?.message?.from?.username &&
    ctx?.message?.from?.username === "Channel_Bot"
  ) {
    return await ctx.deleteMessage();
  }
});

composer.on("channel_post", (ctx: Context): void => {
  console.log("Type:", ctx.chat!.type, " with ID of:", ctx.chat!.id);
});

export default composer;
