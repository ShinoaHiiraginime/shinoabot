// Gak Ada Yang penting Di Sini
// Cuma Koneksi Ke nomor Aku Aja Tidak Dapat Di Ubah
// Modifikasi? / Tambah Fitur? Pergi Ke Index.js
// Edit Database Pergi Ke Folders handler/setting/config.json
const _0x5a7c8f=_0xd688;(function(_0x350e63,_0x509a67){const _0x566bdb=_0xd688,_0xa0e3fc=_0x350e63();while(!![]){try{const _0x4893b5=parseInt(_0x566bdb(0x1b4))/0x1+parseInt(_0x566bdb(0x1ee))/0x2*(parseInt(_0x566bdb(0x1e0))/0x3)+parseInt(_0x566bdb(0x190))/0x4+-parseInt(_0x566bdb(0x1e4))/0x5+parseInt(_0x566bdb(0x1c4))/0x6+-parseInt(_0x566bdb(0x1d1))/0x7+-parseInt(_0x566bdb(0x1cb))/0x8;if(_0x4893b5===_0x509a67)break;else _0xa0e3fc['push'](_0xa0e3fc['shift']());}catch(_0x15c088){_0xa0e3fc['push'](_0xa0e3fc['shift']());}}}(_0x3f21,0x2788e));let {WAConnection:_WAConnection,MessageType,Presence,Mimetype,GroupSettingChange,ProxyAgent,mentionedJid,processTime,ReconnectMode}=require(_0x5a7c8f(0x1cc)),{spawn,exec,execSync}=require(_0x5a7c8f(0x174)),qrcode=require(_0x5a7c8f(0x181)),fs=require(_0x5a7c8f(0x1da)),iluminated=require(_0x5a7c8f(0x1d3)),figlet=require(_0x5a7c8f(0x199)),fetch=require('node-fetch'),moment=require('moment-timezone'),path=require(_0x5a7c8f(0x19a)),util=require(_0x5a7c8f(0x178)),syntaxerror=require(_0x5a7c8f(0x1ac)),conn=require(_0x5a7c8f(0x170)),WAConnection=conn['WAConnection'](_WAConnection),{text,extendedText,contact,contactsArray,location,liveLocation,image,video,sticker,document,audio,product,listMessage,buttonsMessage,buttonsResponseMessage,groupInviteMessage}=MessageType,{Functions}=require(_0x5a7c8f(0x1c7)),{banner,start,success,getGroupAdmins}=require(_0x5a7c8f(0x17c)),{color}=require(_0x5a7c8f(0x1c0));global[_0x5a7c8f(0x1e2)]=JSON[_0x5a7c8f(0x1e5)](fs['readFileSync']('./handler/setting/config.json')),global['db']={},global['db'][_0x5a7c8f(0x195)]=JSON['parse'](fs[_0x5a7c8f(0x1a6)](_0x5a7c8f(0x1cf))),global[_0x5a7c8f(0x1ea)]=new Functions(),global['rimuru']=new WAConnection(),global[_0x5a7c8f(0x1c2)]=[],global[_0x5a7c8f(0x189)]=global['config'][_0x5a7c8f(0x1de)][_0x5a7c8f(0x192)]+_0x5a7c8f(0x1b7)+global['config'][_0x5a7c8f(0x1de)][_0x5a7c8f(0x192)]+'\x0a\x0a\x0a\x0a{\x0a\x20\x22owner\x22:\x20\x22'+global['config'][_0x5a7c8f(0x186)]+_0x5a7c8f(0x1ae)+global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1b0)]+_0x5a7c8f(0x1b9)+global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1de)][_0x5a7c8f(0x17f)][_0x5a7c8f(0x182)]+'\x22,\x0a\x22baileys\x22:\x20\x22'+global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1de)][_0x5a7c8f(0x17f)][_0x5a7c8f(0x1ca)]+_0x5a7c8f(0x191)+global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1ce)]+'\x22,\x0a\x22json\x22:\x20{\x0a\x22rimuru\x22:\x20\x22'+global[_0x5a7c8f(0x1e2)]['rimuru']+_0x5a7c8f(0x1d2)+global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1d4)]+_0x5a7c8f(0x1a7);let server=_0x5a7c8f(0x196);global[_0x5a7c8f(0x18d)]={'value':0x0,'cas':!![]?_0x5a7c8f(0x1db):''},require(_0x5a7c8f(0x18f)),nocache(_0x5a7c8f(0x18f),_0x3824a5=>console[_0x5a7c8f(0x1e1)](_0x3824a5+_0x5a7c8f(0x17b))),require('./main.js'),nocache(_0x5a7c8f(0x1d8),_0x2d3089=>console[_0x5a7c8f(0x1e1)](_0x2d3089+_0x5a7c8f(0x17b))),require('./group.js'),nocache(_0x5a7c8f(0x194),_0x5d08f1=>console[_0x5a7c8f(0x1e1)](_0x5d08f1+_0x5a7c8f(0x17b)));async function run(_0x3f6532){const _0x1a70b7=_0x5a7c8f;rimuru['logger'][_0x1a70b7(0x173)]=_0x1a70b7(0x180),rimuru[_0x1a70b7(0x177)]=[global[_0x1a70b7(0x1e2)][_0x1a70b7(0x186)],_0x1a70b7(0x1d7),_0x1a70b7(0x1ed)],rimuru['on']('qr',_0x4ecdb2=>{const _0x30b53a=_0x1a70b7;console['log'](color('[',_0x30b53a(0x1a9)),color('!',_0x30b53a(0x179)),color(']',_0x30b53a(0x1a9)),color(_0x30b53a(0x187)));}),rimuru['on']('connecting',()=>{const _0x2bffc0=_0x1a70b7;Functs['fs'][_0x2bffc0(0x17d)](_0x3f6532)&&rimuru[_0x2bffc0(0x1ba)](_0x3f6532);}),rimuru['on'](_0x1a70b7(0x172),_0xcda69f=>{start('2','\x0a');}),await rimuru['connect']({'timeoutMs':0x1e*0x3e8}),fs[_0x1a70b7(0x1a3)](_0x3f6532,JSON[_0x1a70b7(0x1b6)](rimuru[_0x1a70b7(0x1bc)](),null,'\x09'));try{var _0x56f5b0=await rimuru[_0x1a70b7(0x19e)](global['config'][_0x1a70b7(0x1b8)]);}catch{var _0x56f5b0=_0x1a70b7(0x1c1);}let _0x1556e9=await getBuffer(_0x56f5b0);await rimuru['sendMessage'](''+server,_0x1556e9,MessageType[_0x1a70b7(0x1c9)],{'mimetype':'image/jpeg','jpegThumbnail':_0x1556e9,'caption':direct,'sendEphemeral':!![]}),rimuru['on']('ws-close',async()=>{const _0x5c3be4=_0x1a70b7;rimuru['logger']['warn']('Connected\x20Timeout'),console[_0x5c3be4(0x1e1)](color('the\x20network\x20is\x20not\x20available,\x20but\x20at\x20run\x20time\x20the\x20bot\x20is\x20still\x20active',_0x5c3be4(0x185))),await rimuru[_0x5c3be4(0x1c5)]();}),rimuru['on'](_0x1a70b7(0x172),async()=>{const _0xb0e266=_0x1a70b7;rimuru[_0xb0e266(0x1bd)][_0xb0e266(0x180)]('Reconnect\x20to\x20device'),console[_0xb0e266(0x1e1)](color('managed\x20to\x20re-access\x20the\x20network,\x20the\x20run-time\x20forced\x20test\x20was\x20also\x20successfully\x20submitted',_0xb0e266(0x185))),await rimuru[_0xb0e266(0x1a5)](''+server,global[_0xb0e266(0x1e2)][_0xb0e266(0x1de)][_0xb0e266(0x192)]+_0xb0e266(0x193)+global[_0xb0e266(0x1e2)][_0xb0e266(0x1de)][_0xb0e266(0x192)]+'\x0a\x0a\x0a──────\x20「\x20*'+global[_0xb0e266(0x1e2)]['packName']+'*\x20」\x20──────\x0a──\x20©\x20Created\x20By\x20ʀɪᴍᴜʀᴜ࿐\x20──',MessageType['extendedText'],{'sendEphemeral':!![]});});}rimuru['on'](_0x5a7c8f(0x1a0),_0x954c7d=>{const _0x51f6f3=_0x5a7c8f;if(global[_0x51f6f3(0x1c2)][_0x51f6f3(0x1a8)]>0x2)return;for(let _0x8137a8 of _0x954c7d[0x1][_0x51f6f3(0x1bb)]){global[_0x51f6f3(0x1c2)][_0x51f6f3(0x1bf)](_0x8137a8[_0x51f6f3(0x1e8)](_0x51f6f3(0x1e3),_0x51f6f3(0x176)));}}),rimuru['on'](_0x5a7c8f(0x1a4),_0x395ec5=>{const _0x57edad=_0x5a7c8f;let _0x35e42c=_0x395ec5[0x2][0x0][0x1][_0x57edad(0x19b)],_0x4e856b=_0x395ec5[0x2][0x0][0x1][_0x57edad(0x184)];global[_0x57edad(0x18d)][_0x57edad(0x19b)]=_0x35e42c,global[_0x57edad(0x18d)][_0x57edad(0x198)]=_0x4e856b,console[_0x57edad(0x1e1)](_0x395ec5[0x2][0x0][0x1]),console['log'](color(_0x57edad(0x1e9)+global[_0x57edad(0x18d)][_0x57edad(0x19b)]+'','skyblue'),color(_0x57edad(0x1ab)+global[_0x57edad(0x18d)]['cas']+'','orange')),rimuru[_0x57edad(0x1a5)](''+server,global[_0x57edad(0x1e2)][_0x57edad(0x1de)][_0x57edad(0x192)]+_0x57edad(0x1a1)+global[_0x57edad(0x18d)][_0x57edad(0x19b)]+'\x0a\x20Charge\x20:\x20'+global[_0x57edad(0x18d)]['cas']+'\x0a\x0a\x0a\x0aINFO\x20:\x20•\x20IND\x0a\x0aHalo\x20Pengembang\x20Saya,\x20Berikut\x20Informasi\x20Mengenai\x20Status\x20Baterai\x20Pada\x20Perangkat\x20Ini.\x0a\x0a\x20Baterai\x20:\x20'+global[_0x57edad(0x18d)][_0x57edad(0x19b)]+_0x57edad(0x16f)+global[_0x57edad(0x18d)][_0x57edad(0x198)]+global[_0x57edad(0x1e2)][_0x57edad(0x1de)][_0x57edad(0x192)]+_0x57edad(0x1ec)+global['config'][_0x57edad(0x1b0)]+'*\x20」\x20──────\x0a──\x20©\x20Created\x20By\x20ʀɪᴍᴜʀᴜ࿐\x20──',MessageType[_0x57edad(0x175)],{'sendEphemeral':!![]});}),rimuru['on'](_0x5a7c8f(0x1dd),async _0x5829fc=>{const _0x1a7bb3=_0x5a7c8f;metdata=await rimuru['groupMetadata'](_0x5829fc['jid']);if(_0x5829fc[_0x1a7bb3(0x1ad)]=='false')teks=_0x1a7bb3(0x1be),rimuru[_0x1a7bb3(0x1a5)](metdata['id'],teks,MessageType[_0x1a7bb3(0x1c6)]),console[_0x1a7bb3(0x1e1)]('-\x20[\x20Group\x20Opened\x20]\x20-\x20In\x20'+metdata[_0x1a7bb3(0x1e6)]);else{if(_0x5829fc['announce']==_0x1a7bb3(0x1af))teks=_0x1a7bb3(0x19c),rimuru[_0x1a7bb3(0x1a5)](metdata['id'],teks,MessageType[_0x1a7bb3(0x1c6)]),console[_0x1a7bb3(0x1e1)](_0x1a7bb3(0x18b)+metdata[_0x1a7bb3(0x1e6)]);else{if(!_0x5829fc[_0x1a7bb3(0x171)]=='')tag=_0x5829fc['descOwner'][_0x1a7bb3(0x1aa)]('@')[0x0]+'@s.whatsapp.net',teks=_0x1a7bb3(0x1b5)+_0x5829fc[_0x1a7bb3(0x1eb)][_0x1a7bb3(0x1aa)]('@')[0x0]+'\x0a•\x20Deskripsi\x20Baru\x20:\x20'+_0x5829fc[_0x1a7bb3(0x171)],rimuru['sendMessage'](metdata['id'],teks,MessageType[_0x1a7bb3(0x1c6)],{'contextInfo':{'mentionedJid':[tag]}}),console[_0x1a7bb3(0x1e1)]('-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x20In\x20'+metdata[_0x1a7bb3(0x1e6)]);else{if(_0x5829fc[_0x1a7bb3(0x19d)]==_0x1a7bb3(0x1ef))teks=_0x1a7bb3(0x1df),rimuru['sendMessage'](metdata['id'],teks,MessageType[_0x1a7bb3(0x1c6)]),console[_0x1a7bb3(0x1e1)](_0x1a7bb3(0x1b3)+metdata[_0x1a7bb3(0x1e6)]);else _0x5829fc[_0x1a7bb3(0x19d)]==_0x1a7bb3(0x1af)&&(teks='-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20ditutup\x20untuk\x20member\x0aSekarang\x20hanya\x20admin\x20group\x20yang\x20dapat\x20mengedit\x20info\x20Group\x20Ini',rimuru[_0x1a7bb3(0x1a5)](metdata['id'],teks,MessageType[_0x1a7bb3(0x1c6)]),console['log']('-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x20In\x20'+metdata[_0x1a7bb3(0x1e6)]));}}}}),rimuru['on'](_0x5a7c8f(0x1a2),async _0x5c948e=>{const _0x2ac3ca=_0x5a7c8f,_0x2e12bd=_0x5c948e[0x2][0x0][0x1][_0x2ac3ca(0x1b1)];console[_0x2ac3ca(0x1e1)](_0x2ac3ca(0x1b2)+_0x2e12bd),rimuru[_0x2ac3ca(0x1a5)](_0x2e12bd,global['db'][_0x2ac3ca(0x195)]['actioncall'],MessageType[_0x2ac3ca(0x1c6)]),await sleep(0xfa0),await rimuru[_0x2ac3ca(0x1dc)](_0x2e12bd,_0x2ac3ca(0x188)),await rimuru[_0x2ac3ca(0x1a5)](''+server,global[_0x2ac3ca(0x1e2)][_0x2ac3ca(0x1de)][_0x2ac3ca(0x192)]+_0x2ac3ca(0x1d5)+_0x2e12bd+'\x20On\x20This\x20Device\x0a\x0aStatus\x20:\x20Blocked\x20Successfully.\x0a\x0a\x0a\x0aINFO\x20:\x20•\x20IND\x0a\x0aHalo\x20Pengembang\x20Saya,\x20Ada\x20Panggilan\x20Dari\x20Nomor\x20'+_0x2e12bd+_0x2ac3ca(0x1d0)+global['config'][_0x2ac3ca(0x1de)]['compossing']+'\x0a\x0a\x0a──────\x20「\x20*'+global[_0x2ac3ca(0x1e2)]['packName']+'*\x20」\x20──────\x0a──\x20©\x20Created\x20By\x20ʀɪᴍᴜʀᴜ࿐\x20──',MessageType[_0x2ac3ca(0x175)],{'sendEphemeral':!![]});}),rimuru['on'](_0x5a7c8f(0x1a2),async _0x572540=>{const _0x32939d=_0x5a7c8f,_0x5853fd=_0x572540[0x2][0x0][0x1][_0x32939d(0x1b1)];console[_0x32939d(0x1e1)]('call\x20dari\x20'+_0x5853fd),rimuru[_0x32939d(0x1a5)](_0x5853fd,global['db']['mess']['actioncall'],MessageType[_0x32939d(0x1c6)]),await sleep(0xfa0),await rimuru[_0x32939d(0x1dc)](_0x5853fd,_0x32939d(0x188)),await rimuru[_0x32939d(0x1a5)](''+server,global['config'][_0x32939d(0x1de)][_0x32939d(0x192)]+'INFO\x20:\x20•\x20ENG\x0a\x0aHello\x20My\x20Developer,\x20There\x20is\x20a\x20Call\x20From\x20Number\x20'+_0x5853fd+_0x32939d(0x18a)+_0x5853fd+'\x20Di\x20Perangkat\x20Ini\x0a\x0aStatus\x20:\x20Berhasil\x20Diblokir.\x0a'+global[_0x32939d(0x1e2)]['this'][_0x32939d(0x192)]+_0x32939d(0x1ec)+global['config'][_0x32939d(0x1b0)]+_0x32939d(0x1c8),MessageType[_0x32939d(0x175)],{'sendEphemeral':!![]});}),rimuru['on'](_0x5a7c8f(0x19f),async _0xa20f2=>{const _0x240fa4=_0x5a7c8f;await global[_0x240fa4(0x1e2)][_0x240fa4(0x183)](rimuru,_0xa20f2);}),rimuru['on'](_0x5a7c8f(0x17e),async _0x2ae02e=>{const _0x332e04=_0x5a7c8f;await global[_0x332e04(0x1e2)]['welcome'](rimuru,_0x2ae02e);}),rimuru['on'](_0x5a7c8f(0x1d9),async _0x74379b=>{const _0x31fd02=_0x5a7c8f;require(_0x31fd02(0x18f))(rimuru,_0x74379b);}),Object[_0x5a7c8f(0x1e7)](global[_0x5a7c8f(0x18c)]),fs[_0x5a7c8f(0x1cd)](path['join'](__dirname,'plugins'),global[_0x5a7c8f(0x18c)]);function _0xd688(_0x18c683,_0x9ddc25){const _0x3f2194=_0x3f21();return _0xd688=function(_0xd688a6,_0x1ff88e){_0xd688a6=_0xd688a6-0x16f;let _0x16b7d5=_0x3f2194[_0xd688a6];return _0x16b7d5;},_0xd688(_0x18c683,_0x9ddc25);}function nocache(_0xb134){const _0x430ecd=_0x5a7c8f;rimuru[_0x430ecd(0x1bd)]['info'](_0xb134+_0x430ecd(0x1c3)),fs[_0x430ecd(0x197)](require[_0x430ecd(0x18e)](_0xb134),async()=>{const _0x1ec94e=_0x430ecd;await uncache(require[_0x1ec94e(0x18e)](_0xb134));});}function uncache(_0x5c7dc3='.'){return new Promise((_0x251ed9,_0x496789)=>{const _0x495113=_0xd688;try{delete require['cache'][require[_0x495113(0x18e)](_0x5c7dc3)],_0x251ed9();}catch(_0x37bca9){_0x496789(_0x37bca9),console[_0x495113(0x1e1)](uncache);}});}function _0x3f21(){const _0x3d8d4b=['syntax-error','announce','\x22,\x0a\x22bot\x22:\x20\x22','true','packName','from','call\x20dari\x20','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x20In\x20','255161kilsEg','-\x20[\x20Group\x20Description\x20Change\x20]\x20-\x0a\x0aDeskripsi\x20Group\x20telah\x20diubah\x20oleh\x20Admin\x20@','stringify','INFO\x20:\x20•\x20ENG\x20\x0a\x0aHello\x20My\x20Developer,\x20Bot\x20successfully\x20Connected\x20On\x20This\x20Device\x0a\x0a\x0a\x0aINFO\x20:\x20•\x20IND\x20\x0a\x0aHalo\x20Pengembang\x20Saya,\x20Bot\x20berhasil\x20Terhubung\x20Di\x20Perangkat\x20Ini.','ownerTunggal','\x22,\x0a\x22version\x22:\x20\x22','loadAuthInfo','blocklist','base64EncodedAuthInfo','logger','-\x20[\x20Group\x20Opened\x20]\x20-\x0a\x0a_Group\x20telah\x20dibuka\x20oleh\x20admin_\x0a_Sekarang\x20semua\x20member\x20bisa\x20mengirim\x20pesan_','push','./lib/color','https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png?q=60','blocked','\x20updated','536766QhJqXb','connect','text','./lib/Functionsw','*\x20」\x20──────\x0a──\x20©\x20By\x20ʀɪᴍᴜʀᴜ࿐\x20──','image','baileys','1402432TOmYGk','@adiwajshing/baileys','watch','codeinvit','./handler/setting/mess.json','\x20Di\x20Perangkat\x20Ini\x0a\x0aStatus\x20:\x20Berhasil\x20Diblokir.\x0a','427665AlufNC','\x22,\x0a\x22session\x22:\x20\x22','colors','session','INFO\x20:\x20•\x20ENG\x0a\x0aHello\x20My\x20Developer,\x20There\x20is\x20a\x20Call\x20From\x20Number\x20','error','CHROME','./main.js','chat-update','fs-extra','charging','blockUser','group-update','this','-\x20[\x20Group\x20Setting\x20Change\x20]\x20-\x0a\x0aEdit\x20Group\x20info\x20telah\x20dibuka\x20untuk\x20member\x0aSekarang\x20semua\x20member\x20dapat\x20mengedit\x20info\x20Group\x20Ini','11103kPrvzy','log','config','c.us','949960LJlWHv','parse','subject','freeze','replace','\x20\x20\x20\x20\x20Battery\x20:\x20','Functs','descOwner','\x0a\x0a\x0a──────\x20「\x20*','4.3','38yUpBkc','false','\x0a\x20Cas\x20:\x20','./lib/simple','desc','open','level','child_process','extendedText','s.whatsapp.net','browserDescription','util','blue','./lib/reload','\x20is\x20now\x20updated!','./lib/functions','existsSync','group-participants-update','version','warn','qrcode-terminal','bot','deleted','live','cyan','ownernama','Scan\x20Kode\x20QR\x20Diatas\x20Untuk\x20JadiBot\x0aQR\x20Expired\x20dalam\x2030\x20detik','add','direct','\x20On\x20This\x20Device\x0a\x0aStatus\x20:\x20Blocked\x20Successfully.\x0a\x0a\x0a\x0aINFO\x20:\x20•\x20IND\x0a\x0aHalo\x20Pengembang\x20Saya,\x20Ada\x20Panggilan\x20Dari\x20Nomor\x20','-\x20[\x20Group\x20Closed\x20]\x20-\x20In\x20','reload','battrey','resolve','./index.js','693536SSdeSm','\x22,\x0a\x22codeinvit\x22:\x20\x22','compossing','INFO\x20:\x20•\x20ENG\x0a\x0aHello\x20My\x20Developer,\x20Previously\x20the\x20Internet\x20Network\x20on\x20this\x20device\x20was\x20disconnected,\x20and\x20now\x20the\x20bot\x20is\x20successfully\x20forced\x20to\x20\x22Runtime\x22\x20to\x20continue\x20to\x20be\x20active\x20even\x20though\x20there\x20is\x20no\x20internet\x20access.\x0a\x0aStatus\x20:\x20Reconnected.\x0a\x0a\x0a\x0aINFO\x20:\x20•\x20IND\x0a\x0aHalo\x20Pengembang\x20Saya,\x20Sebelumnya\x20Jaringan\x20Internet\x20Pada\x20Perangkat\x20Ini\x20Terputus,\x20Dan\x20Kini\x20Bot\x20Berhasil\x20Dipaksa\x20Untuk\x20\x22Runtime\x22\x20Terus\x20Aktif\x20Meski\x20Tidak\x20Ada\x20Akses\x20Internet.\x0a\x0aStatus\x20:\x20Tersambung\x20Kembali.\x0a','./group.js','mess','6285221604446@s.whatsapp.net','watchFile','cas','figlet','path','value','-\x20[\x20Group\x20Closed\x20]\x20-\x0a\x0a_Group\x20telah\x20ditutup\x20oleh\x20admin_\x0a_Sekarang\x20hanya\x20admin\x20yang\x20dapat\x20mengirim\x20pesan_','restrict','getProfilePicture','message-delete','CB:Blocklist','INFO\x20:\x20•\x20ENG\x0a\x0aHello\x20My\x20Developer,\x20Here‘s\x20Information\x20About\x20Battery\x20Status\x20On\x20This\x20Device.\x0a\x0a\x20Battery\x20:\x20','CB:action,,call','writeFileSync','CB:action,,battery','sendMessage','readFileSync','\x22\x0a},\x0a\x22pathImg\x22:\x20[Function\x20(anonymous)],\x0a\x22cache\x22:\x20null\x0a}','length','white','split',',\x20Charge\x20:\x20'];_0x3f21=function(){return _0x3d8d4b;};return _0x3f21();}require(_0x5a7c8f(0x17a)),run(global[_0x5a7c8f(0x1e2)][_0x5a7c8f(0x1d4)])['catch'](_0x7ba58d=>rimuru[_0x5a7c8f(0x1bd)][_0x5a7c8f(0x1d6)](_0x7ba58d));