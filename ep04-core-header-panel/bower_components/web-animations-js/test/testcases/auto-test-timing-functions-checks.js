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
    assert_styles('.anim', {'left':'0px'});
  }, "Autogenerated");
  at(0.4 * 1000, function() {
    assert_styles('.anim', {'left':'0px'});
  }, "Autogenerated");
  at(0.8 * 1000, function() {
    assert_styles('.anim', {'left':'0px'});
  }, "Autogenerated");
  at(1.2000000000000002 * 1000, function() {
    assert_styles(
      '.anim',
      [{'left':'20px'},
       {'left':'3.41483736038208px'},
       {'left':'32.11287307739258px'},
       {'left':'40.48971939086914px'},
       {'left':'66.66666412353516px'},
       {'left':'0px'},
       {'left':'0px'},
       {'left':'-48.27153778076172px'},
       {'left':'200px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(1.6 * 1000, function() {
    assert_styles(
      '.anim',
      [{'left':'60px'},
       {'left':'25.923603057861328px'},
       {'left':'89.03398132324219px'},
       {'left':'88.9017333984375px'},
       {'left':'66.66666412353516px'},
       {'left':'66.66666412353516px'},
       {'left':'0px'},
       {'left':'-51.93635177612305px'},
       {'left':'200px'},
       {'left':'0px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(2 * 1000, function() {
    assert_styles(
      '.anim',
      [{'left':'100px'},
       {'left':'63.07688522338867px'},
       {'left':'136.92311096191406px'},
       {'left':'129.63328552246094px'},
       {'left':'133.3333282470703px'},
       {'left':'133.3333282470703px'},
       {'left':'66.66666412353516px'},
       {'left':'100px'},
       {'left':'200px'},
       {'left':'200px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(2.4 * 1000, function() {
    assert_styles(
      '.anim',
      [{'left':'140px'},
       {'left':'110.96601867675781px'},
       {'left':'174.07640075683594px'},
       {'left':'165.04061889648438px'},
       {'left':'200px'},
       {'left':'133.3333282470703px'},
       {'left':'133.3333282470703px'},
       {'left':'251.9363555908203px'},
       {'left':'200px'},
       {'left':'200px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(2.8 * 1000, function() {
    assert_styles(
      '.anim',
      [{'left':'180px'},
       {'left':'167.8871307373047px'},
       {'left':'196.5851593017578px'},
       {'left':'193.0833740234375px'},
       {'left':'200px'},
       {'left':'200px'},
       {'left':'133.3333282470703px'},
       {'left':'248.27154541015625px'},
       {'left':'200px'},
       {'left':'200px'},
       {'left':'0px'}]);
  }, "Autogenerated");
  at(3.1999999999999997 * 1000, function() {
    assert_styles('.anim', {'left':'200px'});
  }, "Autogenerated");
}, "Autogenerated checks.");
