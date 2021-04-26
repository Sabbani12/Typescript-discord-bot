import { Message } from "discord.js";
import { Bot } from "../client/Client";
import { EmbedMessageService } from "../services";
import { RunFunction } from "./../interfaces";

const { embedMessage } = new EmbedMessageService();

export const run: RunFunction = async (client: Bot, message: Message) => {
    embedMessage.setTitle("Ping").setDescription("Ping?");
    const msg: Message = await message.channel.send(embedMessage);
    embedMessage.setDescription(
        `Pong! ⏰ \`${msg.createdTimestamp - message.createdTimestamp}ms.\``
    );
    msg.edit(embedMessage);
};

export const name: string = "ping";