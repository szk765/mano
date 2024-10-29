// 画像ファイル読み込み（準備）
var pathList = [
    // ここにパスを追加していく
    'img/0.jpg',
    'img/1.jpg',
    'img/2.jpg',
    'img/3.jpg',
    'img/4.jpg',
    'img/5.jpg',
    'img/6.jpg',
    'img/7.jpg',
    'img/8.jpg',
    'img/9.jpg',
    'img/10.jpg',
    'img/11.jpg',
    'img/12.jpg',
    'img/13.jpg',
    'img/14.jpg',
    'img/15.jpg',
    'img/16.jpg',
    'img/17.jpg',
    'img/18.jpg',
    'img/19.jpg',
    'img/20.jpg',
    'img/21.jpg',
    'img/22.jpg',
    'img/23.jpg',
    'img/24.jpg',
    'img/25.jpg',
    'img/26.jpg',
    'img/27.jpg',
    'img/28.jpg',
    'img/29.jpg',
    'img/30.jpg',
    'img/31.jpg',
    'img/32.jpg',
    'img/33.jpg',
    'img/34.jpg',
    'img/35.jpg',
    'img/36.jpg',
    'img/37.jpg',
    'img/38.jpg',
    'img/39.jpg',
    'img/40.jpg',
    'img/41.jpg',
    'img/42.jpg',
    'img/43.jpg',
    'img/44.jpg',
    'img/45.jpg'
];

var img = new Array();
for (var i = 0; i < pathList.length; i++) {
    var image = new Image();
    image.src = pathList[i];
    img.push(image);
}

// 読み札準備
var yomihuda = [
//    'あなただけの ツーショットチェキ',
//    'イベント大成功！',
//    '嬉しい火曜日',
//    '延期したら誕生日だった',
//    'おじさんのハートフルラジオ'
    'ありがとう　ギフトとハートは 大好物',
    'いつもここから！　ラックなステイ。',
    'うな重で　いつか食べたい　特上を',
    '笑みを絶やさず　声を届けます　コツコツと。',
    'おめでとう 毎月言うよ　みんなでお祝い誕生日',
    '火曜日は みんなで聴こう　ラックにステイ！',
    '君のために 話しているよ。',
    'クッキー＆クリームが1番好き！',
    '健康の知識も得られるラジオ',
    'コーラは瓶だと倍美味い。',
    'サインの中にはねこちゃんが隠れているよ',
    '"社長をいつか超える"が最初の目標',
    'スワローズへの愛が溢れ出る',
    'セッティング完了　今夜はタコなし たこ焼きパーティ',
    '存在が天使　真野あゆみ',
    '滝行へ行こう！！',
    'ちょっと今日は試合に集中したいです',
    'ついにイベント決定だ！　ワクワクがとまらない！',
    '天より使わされたこの私が迷えるリスナーを導いています。（毎週火曜夜9時から）',
    'とりあえず聴いてみようね　ラジオトークでラックにステイ！',
    '鳴かぬなら　聴かせてみよう　ラックにステイ！',
    '虹色の色鉛筆を添えて　映える配置で 真野カルタをパシャ',
    'ぬるま湯で甘やかされるラジオ',
    'ねぇ、オープニング30分って長くない？',
    'Non non 「みそぞう」じゃなくて「み・そ・ぐ・ら」ですよ。',
    'はやくこーい！　火曜のラックにステイ！',
    'ヒントはいつも斜め上　リスナー参加型の五十音クイズ！',
    '触れたら最後、野球の話題　延長確定ボーナスタイム',
    '凹んだ気分に効果バツグン　聴く栄養剤「真野あゆみのラックにステイ！」改め「マノビタミンA」',
    'ほっとする、リスナー同士の仲の良さ　ホットな放送ラックにステイ！',
    'まったり ぐだる ラックにステイ！',
    'みそ蔵はラックにステイの人気者　たまに現れ 残すインパクト！',
    '夢中で聴いちゃういいラジオ！　このラジオいいラジオ　そう、いいラジオ…いいラジオ…いいラジオ…',
    '珍しい ご飯のお供 待ってます！　正直食レポ 次はいつかな？',
    '文字は書けても 読めません。',
    'やめないで！ 真野あゆみのラックにステイ！',
    'ゆる噛み、あま噛み、本気噛み。噛むほど味わい深ーいラジオ。真野あゆみのラックにステイ！でも野球の話は嚙みません☆',
    'よ、ヨダレヨダレ、モップモップ、バケツバケツ',
    'ラックがステイするように☆ 幸せな時間をお届けします！ 真野あゆみのラックにステイ',
    'リピートアフターミー！『このラジオはいいラジオ。私はウェルビーイング』 はいっ♪',
    'ルーブル美術館に飾りたくなるカルタの絵札。完成間近の「まのカルタ」',
    'Let’s ウェルビーイング！ 真野あゆみのラックにステイ！を聞こう♪',
    '老人にも優しいラジオ',
    '悪い子には釘バット　いい子にはご褒美の釘バット',
    'wow wow！ イェイ イェイ！ ぷちょへんざ！',
    'ん～～ リスナーのみんなが大好き～～！！'

];

var total = img.length;


// 重複チェック用　初期化
var chk = [];
for (i=0; i<img.length; i++){
    chk[i] = 0;
}
var chksum = 0;


function karuta(x){
    // 読み札表示
    yom = yomihuda[x]
    tgamen = document.getElementById('yomi');
    tgamen.innerHTML = yom;
    // 画像表示
    imgx = img[x];
    canv = document.getElementById('ehuda');
    ct = canv.getContext('2d');
    ct.clearRect(0, 0, 199, 299);
    ct.drawImage(imgx, 0, 0);
    // ボタンリセット
    document.getElementById('btn'+ x).disabled = true;
    // 音を鳴らす
    document.getElementById('sound'+ x).play();
    chk[x] = 1;
    maisuu();
}

// 枚数カウント
function maisuu(){
    cnt2 = img.length;
    chksum = 0;
    for (i=0; i<img.length; i++){
        chksum = chksum + chk[i];
    }
    cnt = String(chksum) + ' / ' + String(cnt2);
    mai = document.getElementById('count');
    mai.innerHTML = cnt;
}

// 枚数リセット
function maisuu0(){
    cnt2 = img.length;
    chksum = 0;
    cnt = String(chksum) + ' / ' + String(cnt2);
    mai = document.getElementById('count');
    mai.innerHTML = cnt;
}

// ランダム再生（1つ）
function rand(){
    x = 0;
    do {
        randn = Math.floor(Math.random() * 46); // 0-45の46種類
        if (chk[randn] != 1){
            karuta(randn);
            x++;
        }
    } while (x != 1);

    chksum = 0;
    for (i=0; i<img.length; i++){
        chksum = chksum + chk[i];
    }
    if (chksum == img.length){
        document.getElementById('rand').disabled = true;
        document.getElementById('randall').disabled = true;
        clearInterval(fnc);
    }
}

// ランダム再生（全部）
function randall(){
    rand();
    fnc = setInterval(rand, 10000);
    fnc;
}

// リセット
function reset(){
    // ボタンリセット
    for(i=0; i<img.length; i++){
        document.getElementById('btn' + i).disabled = false;
        chk[i] = 0;     // チェック配列リセット
    }
    document.getElementById('rand').disabled = false;
    document.getElementById('randall').disabled = false;
    // 文字列リセット
    moji = document.getElementById('yomi');
    moji.innerHTML = "";
    // 画像リセット
    ct.fillStyle = '#add8e6'; // RGB 173,216,230 (LightBlue)
    ct.fillRect(0, 0, 200, 300);
    // 枚数カウントリセット
    maisuu0();
}

// ストップ　ランダム再生（全部）のストップ
function stop(){
    clearInterval(fnc);
}

