import pkg from '../../package.json'
import eruda from './modules/eruda/eruda.js'
import erudaDom from 'eruda-dom'

export let devTool = async () => {
    try {
        eruda.init()
        eruda.add(erudaDom);
        return {
            success: true,
            status: "true",
            message: ''
        }
    } catch (e) {
        return {
            success: false,
            status: "false",
            message: e
        }
    }
}

export default {
    "name": "@newkind/devtool",
    "workflow": {
        "0": "import { devTool } from './index.mjs'",
        "1": "await devTool()"
    }
}
