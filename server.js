const bot = new dbd.Bot({
token: "ODA0MjU3NTQyNTAyNDgxOTI1.YBJtNA.oRYVPoxto23MvBRjrTPCK33x8MY", 
prefix: "$getServerVar[prefix]" 
})
bot.onMessage()

bot.command({
name: "ping", 
code: `$ping Pong!` 
})

bot.status({
 
text: "$getServerVar[prefix]",
 
type: "WATCHING",
 
time: 12
})

bot.command({
name: "setprefix",
aliases: ['changeprefix', 'prefix'],
code: `$author[Success;https://cdn.discordapp.com/attachments/760236507310850102/780441559468474408/6286_tada_animated.gif]
$description[**Done, my new prefix is** \`$message\`]
$color[RANDOM]
$setServerVar[prefix;$message]
$onlyIf[$message[1]!=;**You have to put a prefix, example** \`$getServerVar[prefix]setprefix /\`]
$onlyPerms[admin;$customEmoji[Rufy] **You dont have** \`ADMIN\` **perms**]`
})

bot.command({
 name: "unban",
 code: `$unban[$message[1];By $userTag[$authorID] Reason: $sliceMessage[1]]
$username[$message[1]] **has been unbanned ✔**
$onlyBotPerms[ban;**✖ I don't have ban perms]
$argsCheck[>1;**✖ Please Provide User ID To Unban**]
$onlyPerms[ban;**✖ You need ban permission**]
$suppressErrors[**✖ I can't find that user**]`
})

bot.command({
name: "kick",
code: `$kick[$findUser[$message[1]]]
 $title[Kick]
 $description[
 Successfully kicked the user
 **Tag:** $userTag[$findUser[$message[1]]]
 **Mention:** <@$findUser[$message[1]]>
 **ID:** $findUser[$message[1]]]
 $footer[Kicked by $username[$authorID]]
 $addTimestamp
 $color[RANDOM]
$onlyIf[$findUser[$message[1]]!=$clientID;**✖ I can't kick my self**]
$onlyIf[$findUser[$message[1]]!=$authorID;**✖ You can't kick yourself**]
$onlyIf[$rolePosition[$highestRole[$authorID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**✖ You can't kick someone with higher or the same roles as you**]
$onlyIf[$rolePosition[$highestRole[$clientID]]<$rolePosition[$highestRole[$findUser[$message[1]]]];**✖ I can't kick someone with higher or the same roles as me**]
$onlyIf[$memberExists[$findUser[$message[1]]]==true;**✖ Couldn't find a member with this ID/name/mention in the server**]
$onlyIf[$findUser[$message[1]]!=$ownerID;**✖ I can't modify the server owner**]
$onlyIf[$message[1]!=;**✖ Please mention someone to kick**]
$onlyBotPerms[kick;**✖ The bot doesn't have enough permissions**]
$onlyPerms[kick;**✖ You don't have enough permission**]`
})

bot.command({
name: "clear",
aliases: ['purge'],
code: `$author[Cleaning;https://thumbs.gfycat.com/AltruisticDistinctAoudad-size_restricted.gif]
$description[**Done** \`$noMentionMessage $replaceText[$replaceText[&$mentioned[1]&;&&;messages\` **were cleared**;1];&$mentioned[1]&;**of last messages of**;1] $replaceText[$replaceText[&$mentioned[1]&;&&;;1];&$mentioned[1]&;<@$mentioned[1]>;1]]
$clear[$message]
$color[RANDOM]
$cooldown[10s;<@$authorID> **You need to wait %time% to use this command again**]
$footer[Cleared By: $username[$authorID]#$discriminator[$authorID]]
$suppressErrors[**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$noMentionMessage<=500; **You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage>=2;**You can eliminate 2-500 messages per command**]
$onlyIf[$noMentionMessage!=;** Add a number to delete the messages**, **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$isNumber[$noMentionMessage]==true;Choose the number of messages to delete! **Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyIf[$message[1]!=;**Try:** \`$getServerVar[prefix]clear <number>\`]
$onlyBotPerms[managemessages;**I don't have \`MANAGE_MESSAGES\` permissions to use this command**]
$onlyPerms[managemessages;**You dont have this perm to delete messages:** __**Manage Messages**__]`
})

bot.variables({
  prefix: "pb!",
})
