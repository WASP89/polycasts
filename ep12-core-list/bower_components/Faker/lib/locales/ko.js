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

var ko = {};
module["exports"] = ko;
ko.title = "Korean";
ko.address = {
  "postcode": [
    "###-###"
  ],
  "state": [
    "강원",
    "경기",
    "경남",
    "경북",
    "광주",
    "대구",
    "대전",
    "부산",
    "서울",
    "울산",
    "인천",
    "전남",
    "전북",
    "제주",
    "충남",
    "충북",
    "세종"
  ],
  "state_abbr": [
    "강원",
    "경기",
    "경남",
    "경북",
    "광주",
    "대구",
    "대전",
    "부산",
    "서울",
    "울산",
    "인천",
    "전남",
    "전북",
    "제주",
    "충남",
    "충북",
    "세종"
  ],
  "city_suffix": [
    "구",
    "시",
    "군"
  ],
  "city_name": [
    "강릉",
    "양양",
    "인제",
    "광주",
    "구리",
    "부천",
    "밀양",
    "통영",
    "창원",
    "거창",
    "고성",
    "양산",
    "김천",
    "구미",
    "영주",
    "광산",
    "남",
    "북",
    "고창",
    "군산",
    "남원",
    "동작",
    "마포",
    "송파",
    "용산",
    "부평",
    "강화",
    "수성"
  ],
  "city": [
    "#{city_name}#{city_suffix}"
  ],
  "street_root": [
    "상계",
    "화곡",
    "신정",
    "목",
    "잠실",
    "면목",
    "주안",
    "안양",
    "중",
    "정왕",
    "구로",
    "신월",
    "연산",
    "부평",
    "창",
    "만수",
    "중계",
    "검단",
    "시흥",
    "상도",
    "방배",
    "장유",
    "상",
    "광명",
    "신길",
    "행신",
    "대명",
    "동탄"
  ],
  "street_suffix": [
    "읍",
    "면",
    "동"
  ],
  "street_name": [
    "#{street_root}#{street_suffix}"
  ]
};
ko.phone_number = {
  "formats": [
    "0#-#####-####",
    "0##-###-####",
    "0##-####-####"
  ]
};
ko.company = {
  "suffix": [
    "연구소",
    "게임즈",
    "그룹",
    "전자",
    "물산",
    "코리아"
  ],
  "prefix": [
    "주식회사",
    "한국"
  ],
  "name": [
    "#{prefix} #{Name.first_name}",
    "#{Name.first_name} #{suffix}"
  ]
};
ko.internet = {
  "free_email": [
    "gmail.com",
    "yahoo.co.kr",
    "hanmail.net",
    "naver.com"
  ],
  "domain_suffix": [
    "co.kr",
    "com",
    "biz",
    "info",
    "ne.kr",
    "net",
    "or.kr",
    "org"
  ]
};
ko.lorem = {
  "words": [
    "국가는",
    "법률이",
    "정하는",
    "바에",
    "의하여",
    "재외국민을",
    "보호할",
    "의무를",
    "진다.",
    "모든",
    "국민은",
    "신체의",
    "자유를",
    "가진다.",
    "국가는",
    "전통문화의",
    "계승·발전과",
    "민족문화의",
    "창달에",
    "노력하여야",
    "한다.",
    "통신·방송의",
    "시설기준과",
    "신문의",
    "기능을",
    "보장하기",
    "위하여",
    "필요한",
    "사항은",
    "법률로",
    "정한다.",
    "헌법에",
    "의하여",
    "체결·공포된",
    "조약과",
    "일반적으로",
    "승인된",
    "국제법규는",
    "국내법과",
    "같은",
    "효력을",
    "가진다.",
    "다만,",
    "현행범인인",
    "경우와",
    "장기",
    "3년",
    "이상의",
    "형에",
    "해당하는",
    "죄를",
    "범하고",
    "도피",
    "또는",
    "증거인멸의",
    "염려가",
    "있을",
    "때에는",
    "사후에",
    "영장을",
    "청구할",
    "수",
    "있다.",
    "저작자·발명가·과학기술자와",
    "예술가의",
    "권리는",
    "법률로써",
    "보호한다.",
    "형사피고인은",
    "유죄의",
    "판결이",
    "확정될",
    "때까지는",
    "무죄로",
    "추정된다.",
    "모든",
    "국민은",
    "행위시의",
    "법률에",
    "의하여",
    "범죄를",
    "구성하지",
    "아니하는",
    "행위로",
    "소추되지",
    "아니하며,",
    "동일한",
    "범죄에",
    "대하여",
    "거듭",
    "처벌받지",
    "아니한다.",
    "국가는",
    "평생교육을",
    "진흥하여야",
    "한다.",
    "모든",
    "국민은",
    "사생활의",
    "비밀과",
    "자유를",
    "침해받지",
    "아니한다.",
    "의무교육은",
    "무상으로",
    "한다.",
    "저작자·발명가·과학기술자와",
    "예술가의",
    "권리는",
    "법률로써",
    "보호한다.",
    "국가는",
    "모성의",
    "보호를",
    "위하여",
    "노력하여야",
    "한다.",
    "헌법에",
    "의하여",
    "체결·공포된",
    "조약과",
    "일반적으로",
    "승인된",
    "국제법규는",
    "국내법과",
    "같은",
    "효력을",
    "가진다."
  ]
};
ko.name = {
  "last_name": [
    "김",
    "이",
    "박",
    "최",
    "정",
    "강",
    "조",
    "윤",
    "장",
    "임",
    "오",
    "한",
    "신",
    "서",
    "권",
    "황",
    "안",
    "송",
    "류",
    "홍"
  ],
  "first_name": [
    "서연",
    "민서",
    "서현",
    "지우",
    "서윤",
    "지민",
    "수빈",
    "하은",
    "예은",
    "윤서",
    "민준",
    "지후",
    "지훈",
    "준서",
    "현우",
    "예준",
    "건우",
    "현준",
    "민재",
    "우진",
    "은주"
  ],
  "name": [
    "#{last_name} #{first_name}"
  ]
};
