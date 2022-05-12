import isEmpty from './isEmpty/isEmpty.mjs'
import events from '@newkind/events'
import pushkin from './default/pushkin.index.mjs'
import { assert as assert } from 'chai';  // Using Assert style
import { expect as expect } from 'chai';  // Using Expect style
import { should as should } from 'chai';  // Using Should style

export default ( url = false ) => {
  return new Promise(async (resolve, reject) => {
      try {
          if(url) {
              window['@newkind/tests'] = {
                  assert: assert,
                  expect: expect,
                  should: should,
                  events: events,
                  isEmpty: isEmpty
              }
              let script = document.createElement('script')
              script.type ='module'
              script.src = `${url}`
              document.body.appendChild(script)
              script.onload = () => {
                  console.log('load test')
                  resolve({
                      success: true,
                      status: "true",
                      message: ''
                  })
              }
              script.onerror = function(e) {
                  alert("Error loading " + this.src);
                  reject(e)
              };
          } else {
              eval(pushkin)
              resolve({
                  success: true,
                  status: "true",
                  message: ''
              })
          }
      } catch (e) {
          console.error(e)
          resolve({
              success: false,
              status: "not ok",
              message: e
          })
      }
  })
}
