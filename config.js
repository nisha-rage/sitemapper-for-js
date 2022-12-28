/*
 * *
 *  Copyright 2014 Comcast Cable Communications Management, LLC
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 * /
 */

 /*
 * ** IMPORTANT ** RENAME THIS FILE TO 'config.js' BEFORE RUNNING THE SCRIPT
 */

module.exports  = {
    base: 'https://buytrucknbus.tatamotors.com', // website url

    strictPresence: 'www.xfinity.com/mobile/', // url will be added to xml only if this exists
    ignoreStrings: [ // ignore any url that has these texts
        'img.xfinity',
        'styles.',
        'm.me'
    ],
    autoCrawl: yes, // Recursive crawling functionality
    crawlLevel: 3, // Recursive calling for pages upto 'x' levels
    pageLoad: { // page load configuration
        waitUntil: 'networkidle0',
        timeout: 3000000
    },
    disableHashRoutes: false, // disable routes with Hash in it
    sortBy: 'asc' // 'asc' | 'dsc' | 'none'
}
