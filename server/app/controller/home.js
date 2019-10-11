'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async articles() {
    const { ctx } = this;
    ctx.body = {
      articlesList: [
        { id: 1, title: '测试1' },
        { id: 2, title: '测试2' },
        { id: 3, title: '测试3' },
        { id: 4, title: '测试4' },
      ],
      count: 4,
    };
  }
}

module.exports = HomeController;
