import { Composer, Context } from "grammy";
import * as start from "@/functions/start";

const composer = new Composer();

export const message =
  `<b>⚠️ Available commands:</b>` +
  `\n` +
  `\n` +
  `/help - <code>show this message</code>` +
  `\n` +
  `/what - <code>find out</code>` +
  `\n` +
  `/warn - <code>warn offtopic member</code>` +
  `\n`;

export const keyboard = start.keyboard;

composer.command("help", async (ctx: Context): Promise<void> => {
  await ctx.reply(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

composer.callbackQuery("help", async (ctx: Context): Promise<void> => {
  await ctx.editMessageText(message, {
    parse_mode: "HTML",
    reply_markup: keyboard,
  });
});

export default composer;
