/* ============================================================
   One'sAI · i18n  (v6, 37signals direction)
   English default; 简 / 繁 complete.
   ============================================================ */
window.ONESAI_I18N = {
  en: {
    'meta.title': 'One’sAI — all local, always one line',
    'meta.desc': 'One’sAI lives inside HearthTone. Play something, and it writes one line about the song — entirely on this machine. No cloud. No profile. No upload.',
    'nav.lines': 'Lines',
    'nav.how': 'Take a look',
    'intro': 'One’sAI is the one-liner inside HearthTone.',

    'l1.t': 'One song, one line',
    'l1.b': 'Play anything. During the song it writes a single line about it — in the player’s bottom bar, and never longer than a line.',
    'l2.t': 'Nothing leaves this machine',
    'l2.b': 'No cloud, no profile, no upload. Title, artist and lyrics pass through memory once and are gone. They never cross the network.',
    'l3.t': 'Your model, your machine',
    'l3.b': 'If Ollama runs on this computer, a local model writes the line. Which model is entirely up to you.',
    'l4.t': 'Always works, never waits',
    'l4.b': 'No local model? A built-in word-frequency engine assembles the line itself. There is no “service unavailable”. There is always a line.',
    'l5.t': 'The fewest words possible',
    'l5.b': 'It doesn’t write reviews or genre histories. One line, about how the song feels, and then it stops.',
    'l6.t': 'Ships inside HearthTone',
    'l6.b': 'It isn’t a separate app. Install the HearthTone player, play anything, and the line is already there.',

    'samples.h': 'A few of the lines it has written',
    'samples.shuffle': 'More lines',
    'src.local': 'local model',
    'src.builtin': 'built-in engine',

    'get.download': 'Download HearthTone',
    'foot.top': 'Top',

    pool: [
      { song: 'Night Skies', s: 'Escape Plan', src: 'local',   line: 'It is not about distance — it is about the part of you that has not quit.' },
      { song: 'Under Mount Fuji', s: 'Eason Chan', src: 'local',   line: 'Losing someone, described the way you would describe weather.' },
      { song: 'City of Stars', s: 'Ryan Gosling', src: 'builtin', line: 'It lets the night do the talking, then stops.' },
      { song: 'Slow Burn', s: 'Kacy Hill', src: 'builtin',   line: 'A love that takes its time, in a voice that does too.' },
      { song: 'The Lighthouse', s: 'Anonymous', src: 'builtin', line: 'Guidance for someone else’s ship, written from a room alone.' },
      { song: 'Sunday Rain', s: 'Foo Fighters', src: 'local',   line: 'Rest that arrives only after everything is broken.' }
    ]
  },

  'zh-CN': {
    'meta.title': 'One’sAI — 全本地，永远一行',
    'meta.desc': 'One’sAI 长在 HearthTone 播放器里：播放任意一首歌，它就为这首歌写一行解读，全程在这台电脑上完成。不上云、不建档、不上传。',
    'nav.lines': '它写什么',
    'nav.how': '看看它写的',
    'intro': 'One’sAI 是 HearthTone 里那个写一行字的东西。',

    'l1.t': '一首歌，一行字',
    'l2.t': '什么都不离开这台电脑',
    'l3.t': '你的模型，你的电脑',
    'l4.t': '永远有答案，永远不等待',
    'l5.t': '用最少的字',
    'l6.t': '它就长在 HearthTone 里',

    'l1.b': '播放任意一首歌。歌还没放完，它已经在播放器底栏写好了一行字——只有一行，不会更长。',
    'l2.b': '不上云、不建档、不上传。歌名、歌手、歌词只在内存里经过一次就消失，从不经过网络。',
    'l3.b': '如果这台电脑跑着 Ollama，就由本机模型来写。用哪个模型，完全由你决定。',
    'l4.b': '没有本机模型？内置的词频引擎会自己组装出这句话。没有「服务不可用」，永远有一行。',
    'l5.b': '它不写乐评，不考据流派。一行字，说说这首歌听起来是什么感觉，然后就停。',
    'l6.b': '它不是独立应用。装上 HearthTone 播放器，播放任意一首歌，那一行已经在那里。',

    'samples.h': '它写过的一些句子',
    'samples.shuffle': '更多句子',
    'src.local': '本机模型',
    'src.builtin': '内置引擎',

    'get.download': '下载 HearthTone',
    'foot.top': '回到顶部',

    pool: [
      { song: '夜空中最亮的星', s: '逃跑计划', src: 'local',   line: '它唱的不是远方，是还没放弃的那部分自己。' },
      { song: '富士山下', s: '陈奕迅', src: 'local',   line: '把失去说成一场天气，听完只剩安静。' },
      { song: '晴天', s: '周杰伦', src: 'builtin', line: '把从前和故事慢慢铺开，青春散在课桌之间。' },
      { song: '岁月神偷', s: '金玟岐', src: 'builtin', line: '时间是小偷，可它偷走的都变成了你。' },
      { song: '成都', s: '赵雷', src: 'builtin', line: '一座城市的名字，被唱成了舍不得的说法。' },
      { song: '灯塔', s: '佚名', src: 'local',   line: '为别人的船指路，自己守着一间空屋。' }
    ]
  },

  'zh-Hant': {
    'meta.title': 'One’sAI — 全本機，永遠一行',
    'meta.desc': 'One’sAI 長在 HearthTone 播放器裡：播放任意一首歌，它就為這首歌寫一行解讀，全程在這台電腦上完成。不上雲、不建檔、不上傳。',
    'nav.lines': '它寫什麼',
    'nav.how': '看看它寫的',
    'intro': 'One’sAI 是 HearthTone 裡那個寫一行字的東西。',

    'l1.t': '一首歌，一行字',
    'l2.t': '什麼都不離開這台電腦',
    'l3.t': '你的模型，你的電腦',
    'l4.t': '永遠有答案，永遠不等待',
    'l5.t': '用最少的字',
    'l6.t': '它就長在 HearthTone 裡',

    'l1.b': '播放任意一首歌。歌還沒放完，它已經在播放器底欄寫好了一行字——只有一行，不會更長。',
    'l2.b': '不上雲、不建檔、不上傳。歌名、歌手、歌詞只在記憶體裡經過一次就消失，從不經過網路。',
    'l3.b': '如果這台電腦跑著 Ollama，就由本機模型來寫。用哪個模型，完全由你決定。',
    'l4.b': '沒有本機模型？內置的詞頻引擎會自己組裝出這句話。沒有「服務不可用」，永遠有一行。',
    'l5.b': '它不寫樂評，不考據流派。一行字，說說這首歌聽起來是什麼感覺，然後就停。',
    'l6.b': '它不是獨立應用。裝上 HearthTone 播放器，播放任意一首歌，那一行已經在那裡。',

    'samples.h': '它寫過的一些句子',
    'samples.shuffle': '更多句子',
    'src.local': '本機模型',
    'src.builtin': '內置引擎',

    'get.download': '下載 HearthTone',
    'foot.top': '回到頂部',

    pool: [
      { song: '夜空中最亮的星', s: '逃跑計劃', src: 'local',   line: '它唱的不是遠方，是還沒放棄的那部分自己。' },
      { song: '富士山下', s: '陳奕迅', src: 'local',   line: '把失去說成一場天氣，聽完只剩安靜。' },
      { song: '晴天', s: '周杰倫', src: 'builtin', line: '把從前和故事慢慢鋪開，青春散在課桌之間。' },
      { song: '歲月神偷', s: '金玟岐', src: 'builtin', line: '時間是小偷，可它偷走的都變成了你。' },
      { song: '成都', s: '趙雷', src: 'builtin', line: '一座城市的名字，被唱成了捨不得的說法。' },
      { song: '燈塔', s: '佚名', src: 'local',   line: '為別人的船指路，自己守著一間空屋。' }
    ]
  }
};
