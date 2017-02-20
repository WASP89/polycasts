/**
 * Copyright 2017 Google Inc.
 * 
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *      http://www.apache.org/licenses/LICENSE-2.0
 * 
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var ja = {};
module["exports"] = ja;
ja.title = "Japanese";
ja.address = {
  "postcode": [
    "###-####"
  ],
  "state": [
    "北海道",
    "青森県",
    "岩手県",
    "宮城県",
    "秋田県",
    "山形県",
    "福島県",
    "茨城県",
    "栃木県",
    "群馬県",
    "埼玉県",
    "千葉県",
    "東京都",
    "神奈川県",
    "新潟県",
    "富山県",
    "石川県",
    "福井県",
    "山梨県",
    "長野県",
    "岐阜県",
    "静岡県",
    "愛知県",
    "三重県",
    "滋賀県",
    "京都府",
    "大阪府",
    "兵庫県",
    "奈良県",
    "和歌山県",
    "鳥取県",
    "島根県",
    "岡山県",
    "広島県",
    "山口県",
    "徳島県",
    "香川県",
    "愛媛県",
    "高知県",
    "福岡県",
    "佐賀県",
    "長崎県",
    "熊本県",
    "大分県",
    "宮崎県",
    "鹿児島県",
    "沖縄県"
  ],
  "state_abbr": [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
    "31",
    "32",
    "33",
    "34",
    "35",
    "36",
    "37",
    "38",
    "39",
    "40",
    "41",
    "42",
    "43",
    "44",
    "45",
    "46",
    "47"
  ],
  "city_prefix": [
    "北",
    "東",
    "西",
    "南",
    "新",
    "湖",
    "港"
  ],
  "city_suffix": [
    "市",
    "区",
    "町",
    "村"
  ],
  "city": [
    "#{city_prefix}#{Name.first_name}#{city_suffix}",
    "#{Name.first_name}#{city_suffix}",
    "#{city_prefix}#{Name.last_name}#{city_suffix}",
    "#{Name.last_name}#{city_suffix}"
  ],
  "street_name": [
    "#{Name.first_name}#{street_suffix}",
    "#{Name.last_name}#{street_suffix}"
  ]
};
ja.phone_number = {
  "formats": [
    "0####-#-####",
    "0###-##-####",
    "0##-###-####",
    "0#-####-####"
  ]
};
ja.cell_phone = {
  "formats": [
    "090-####-####",
    "080-####-####",
    "070-####-####"
  ]
};
ja.name = {
  "last_name": [
    "佐藤",
    "鈴木",
    "高橋",
    "田中",
    "渡辺",
    "伊藤",
    "山本",
    "中村",
    "小林",
    "加藤",
    "吉田",
    "山田",
    "佐々木",
    "山口",
    "斎藤",
    "松本",
    "井上",
    "木村",
    "林",
    "清水"
  ],
  "first_name": [
    "大翔",
    "蓮",
    "颯太",
    "樹",
    "大和",
    "陽翔",
    "陸斗",
    "太一",
    "海翔",
    "蒼空",
    "翼",
    "陽菜",
    "結愛",
    "結衣",
    "杏",
    "莉子",
    "美羽",
    "結菜",
    "心愛",
    "愛菜",
    "美咲"
  ],
  "name": [
    "#{last_name} #{first_name}"
  ]
};
