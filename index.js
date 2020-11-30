const Discord = require('discord.js');
const client = new Discord.Client();
const token = 'NzgxNzI3NjA0MTQyMTEyNzY5.X8B2kA.m6z1dZABxy12VHBBjDLwVnYGLpU'; //요기 토큰 넣는곳 입니다!

client.on('ready', () => {
  console.log('봇이 정상적으로 실행되었습니다.'); // 건들면 오류나요 
  client.user.setPresence({ game: { name: '!도움' }, status: 'online' })
});

client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!빈센트 베이직 가격') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 빈센트 베이직 가격\n ● - Price\n [+] 1DAYS : 5,000 KRW\n [+] 3DAYS : 10,000 KRW\n [+] 7DAYS : 20,000 KRW\n [+] 30DAYS : 60,000 KRW\n [+] LIFETIME : 120,000KRW  ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!빈센트 울트라 가격') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 빈센트 울트라 가격\n ● - Price\n [+] 1DAYS : 6,000 KRW\n [+] 7DAYS : 30,000 KRW\n [+] 30DAYS : 80,000 KRW\n [+] LIFETIME : 150,000KRW ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!하쿠나 가격') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 배그핵 hakuna가격\n + [ 가격 ]\n - 1days 3,000\n - 7days 10,000\n - 30days 30,000\n - unlimit 80,000\n _ +5000지불시 배그계정 ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!에데니티 가격') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 에데니티 가격표\n [ PRICE ]\n - 1 𝐃𝐚𝐲 : [ 10,000 KRW] ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!에데니티 파일') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 크롬에 👇검색\n --> [ 파일 다운로드 ] 에데니티.kro.kr ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!하쿠나 파일') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 크롬에 👇검색\n --> [ 회원가입 ] 하쿠나파일1.kro.kr\n --> [ 로그인 ] 하쿠나파일2.kro.kr ') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!빈센트 울트라 소개') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' 울트라 소개\n 특징\n 티가 1도안나는핵!\n 미친성능!\n 많은 기능\n 구매문의 VINCENT#1004\n ! 빅토리아#8448') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!빈센트 베이직 소개') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('베이직 소개\n 특징\n 정지가 거의 없는제품\n 가성비 굿\n 스킬헬퍼\n 간단한 조작법\n 구매문의 VINCENT#1004\n ! 빅토리아#8448') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!도움') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle(' ```!구매문의```\n ```!배너문의```\n ```빈센아 임베드 [색깔]```\n ```빈센아 임베드 색깔 목록```\n ```!리셀방```\n ```빈센아 문상```\n ```!색깔```\n ```!임베드 [색깔] [할말]```\n ```빈센아 실검```') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : ! 빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!구매문의') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('VINCENT#1004\n ! 빅토리아#8448') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!배너문의') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('ৡۣۜ͜ 슬기로운 도원#0905') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!샵링크') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```본점```\n https://discord.gg/qbeAdXD') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!리셀방') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```1호 리셀방```\n https://discord.gg/qgJtDSJ7sx') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!리셀방') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```2호 리셀방```\n https://discord.gg/Y9YtWRkrFv') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '!샵링크') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```2호점```https://discord.gg/kbrnnqS2n5') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 색깔 목록') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```임베드 색깔 목록```\n ```빨강 초록 노랑 검정 핑크```') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 빨강') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FF0000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```빨강 임베드```\n 빨강이다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 초록') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#008000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```초록 임베드```\n 초록이다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 노랑') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FFD400')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```노랑 임베드```\n 노랑이다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 검정') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#000000')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```검정 임베드```\n 검정이다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 핑크') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FFC0CB')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```핑크 임베드```\n 핑크다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 보라') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#8B00FF')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```보라 임베드```\n 보라다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '빈센아 임베드 파랑') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#0067A3')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('```파랑 임베드```\n 파랑이다 이쉐꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});

  client.on('message', (message) => {
    if(message.author.bot) return;
  
    if (message.content === '@everyone') {
      let img = 'https://cdn.discordapp.com/avatars/758473474129133589/a_4021bd6081f973db3e8051dd6f570978.png?size=128%22';//사진 넣는곳.
      let embed = new Discord.RichEmbed() //건들면 오류나요
      .setColor('#FFC0CB')//색깔 넣는곳. 건들이면 안되요.
      .setTitle('애브리원을 왜해\n 씨발새꺄') //  \n 하시면 뛰어쓰기 가능해요.
      .setThumbnail(img)//건들면 오류나요
      .setTimestamp()//건들면 오류나요
      .setFooter('제작 : !빅토리아#8448', img)//제작자 수정 금지 !
      message.channel.send(embed)//건들면 오류나요
      
  }});
  
client.login(token);