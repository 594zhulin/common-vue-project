const Mock = require("mockjs");
const Random = Mock.Random;

const mockapi = {
  // 获取资产借用单
  "GET /api/v1/topics": Mock.mock({
    code: 0,
    message: "success",
    data: {
      total: 1,
      pageSize: 10,
      pageNum: 1,
      list: [
        {
          ticketId: Random.id(),
          ticket: "4014663228225748",
          borrowStatus: 2,
          borrowTime: 1566806284000,
          staffId: "6866336864417901",
          staffName: "罗丹",
          staffDepartmentName: "财务部",
          staffCompanyName: "零点零一科技有限公司",
          expectedReturnTime: 1566892684000,
          actualReturnTime: 1566892684000,
          borrowManagerId: "2215707548291971",
          borrowManagerName: "张雯雯",
          returnManagerId: "6866336864417901",
          returnManagerName: "罗丹",
          remark: "归还一台显示器"
        }
      ]
    }
  })
};

module.exports = mockapi;
