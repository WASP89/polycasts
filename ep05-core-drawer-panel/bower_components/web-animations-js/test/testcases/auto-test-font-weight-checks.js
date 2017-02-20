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
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.3 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.6 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(0.8999999999999999 * 1000, function() {
    assert_styles( '#test', {'font-weight':'100'});
  }, "Autogenerated");
  at(1.2 * 1000, function() {
    assert_styles( '#test', {'font-weight':'300'});
  }, "Autogenerated");
  at(1.5 * 1000, function() {
    assert_styles( '#test', {'font-weight':'500'});
  }, "Autogenerated");
  at(1.8 * 1000, function() {
    assert_styles( '#test', {'font-weight':'bold'});
  }, "Autogenerated");
  at(2.1 * 1000, function() {
    assert_styles( '#test', {'font-weight':'900'});
  }, "Autogenerated");
}, "Autogenerated checks.");
