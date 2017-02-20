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

timing_test(function() {
  at(0 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'}]);
  }, "Autogenerated");
  at(0.1 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'}]);
  }, "Autogenerated");
  at(0.2 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'}]);
  }, "Autogenerated");
  at(0.30000000000000004 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -666.6666870117188, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -533.3333129882813, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -533.3599853515625, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -533.3333129882813, 0)'}]);
  }, "Autogenerated");
  at(0.4 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -400, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -266.6666564941406, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -266.6933288574219, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -266.6666564941406, 0)'}]);
  }, "Autogenerated");
  at(0.5 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, -133.3333282470703, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -0.02666666731238365, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'}]);
  }, "Autogenerated");
  at(0.6 * 1000, function() {
    assert_styles(
      '.anim',
      [{'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, 0, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'},
       {'transform':'matrix(1, 0, 0, 1, -800, 0)'}]);
  }, "Autogenerated");
}, "Autogenerated checks.");
