// 計算ボタンのクリックイベント
document.getElementById('calculateButton').addEventListener('click', function() {
    const value = parseFloat(document.getElementById('valueInput').value); // 入力値の取得
    const unitMultiplier = parseFloat(document.getElementById('unitSelect').value); // 選択された単位の取得
    //const digits = parseInt(document.getElementById('digitSelect').value); // 選択された桁数の取得

    // 入力値が正しいか確認
    if (isNaN(value) || value < 0) {
        alert('正しい数字を入力してください');
        return;
    }

    // バイトに変換
    const byteValue = value * unitMultiplier;
    const units = ['バイト(B)', 'キロバイト(KB)', 'メガバイト(MB)', 'ギガバイト(GB)', 'テラバイト(TB)', 'ペタバイト(PB)', 'エクサバイト(EB)', 'ゼタバイト(ZB)', 'ヨタバイト(YB)', 'ロナバイト(RB)', 'クエタバイト(QB)'];
    let output = '';

    // 各単位での値を計算して出力に追加
    units.forEach((unit, index) => {
        //const convertedValue = byteValue / Math.pow(1024, index);
        const convertedValue = Math.floor(byteValue / Math.pow(1024, index)); // 小数点以下を切り捨て
        //output += `計算結果値：${unit}<br />[ ${convertedValue.toFixed(digits)} ] ${unit}<br /><br />`;
        output += `計算結果値：<br />[ ${convertedValue} ] ${unit}<br /><br />`;
    });

    // 出力エリアに結果を表示
    document.getElementById('output').innerHTML = output;
});

// クリアボタンのクリックイベント
document.getElementById('clearButton').addEventListener('click', function() {
    document.getElementById('valueInput').value = ''; // 入力値をクリア
    document.getElementById('unitSelect').selectedIndex = 0; // 単位をリセット
    document.getElementById('digitSelect').selectedIndex = 6; // 桁数を30にリセット
    document.getElementById('output').innerHTML = ''; // 出力をクリア
});
