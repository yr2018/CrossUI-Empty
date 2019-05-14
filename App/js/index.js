xui.Class('App.hr.user.tab._add', 'xui.Module', {
    Instance: {
        events: { "onReady": "_onready", "onRender": "_onrender" },
        iniComponents: function () {
            // [[Code created by CrossUI RAD Studio
            var host = this, children = [], append = function (child) { children.push(child.get(0)); };

            append(
                xui.create("xui.DataBinder")
                    .setHost(host, "db_hr_user_tab_add")
                    .setName("db_hr_user_tab_add")
            );

            append(
                xui.create("xui.UI.ToolBar")
                    .setHost(host, "_tlb")
                    .setItems([
                        {
                            "sub": [
                                {
                                    "id": "b",
                                    "caption": "a",
                                    "label": "a"
                                }
                            ]
                        }
                    ])
                    .setAutoTips(false)
                    .setHandler(false)
                    .onClick("__tlb_onclick")
            );

            append(
                xui.create("xui.UI.TreeView")
                    .setHost(host, "xui_ui_tv")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("UserType")
                    .setDock("none")
                    .setLeft("27.5em")
                    .setTop("5.333333333333333em")
                    .setWidth("17.333333333333332em")
                    .setHeight("14em")
                    .setSelMode("multibycheckbox")
                    .setValue("")
                    .setCustomStyle({
                        "KEY": "border:1px solid #648CB4;"
                    })
            );

            append(
                xui.create("xui.UI.Label")
                    .setHost(host, "xui_ui_label13")
                    .setLeft("25em")
                    .setTop("5.333333333333333em")
                    .setWidth("2.0833333333333335em")
                    .setCaption("类型")
            );

            append(
                xui.create("xui.UI.Input")
                    .setHost(host, "xui_ui_input162")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("NickName")
                    .setLeft("0.4166666666666667em")
                    .setTop("2.9166666666666665em")
                    .setWidth("22.083333333333332em")
                    .setHeight("1.8333333333333333em")
                    .setTabindex(2)
                    .setTipsErr("6到16位（字母，数字，下划线，减号）")
                    .setPlaceholder("6-16位字符")
                    .setLabelSize("4em")
                    .setLabelCaption("用户名")
                    .setValueFormat("^[a-zA-Z0-9_-]{6,16}$")
                    .setMaxlength(16)
            );

            append(
                xui.create("xui.UI.RadioBox")
                    .setHost(host, "xui_ui_radiobox10")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("Sex")
                    .setItems([
                        {
                            "id": "先生",
                            "caption": "先生"
                        },
                        {
                            "id": "女士",
                            "caption": "女士"
                        }
                    ])
                    .setLeft("27.5em")
                    .setTop("2.75em")
                    .setWidth("17.75em")
                    .setHeight("4.166666666666667em")
                    .setZIndex(0)
                    .setTabindex(3)
                    .setLabelPos("top")
                    .setLabelHAlign("left")
                    .setValue("先生")
            );

            append(
                xui.create("xui.UI.Input")
                    .setHost(host, "xui_ui_input192")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("TrueName")
                    .setLeft("0.4166666666666667em")
                    .setTop("5.333333333333333em")
                    .setWidth("22.083333333333332em")
                    .setHeight("1.8333333333333333em")
                    .setTabindex(4)
                    .setPlaceholder("中文字符")
                    .setLabelSize("4em")
                    .setLabelCaption("真名")
                    .setValueFormat("^[一-龥]{2,4}$")
                    .setMaxlength(200)
            );

            append(
                xui.create("xui.UI.Input")
                    .setHost(host, "xui_ui_input56")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("Info")
                    .setLeft("0.4166666666666667em")
                    .setTop("12.166666666666666em")
                    .setWidth("22.083333333333332em")
                    .setHeight("7.166666666666667em")
                    .setTabindex(7)
                    .setPlaceholder("选填")
                    .setLabelSize("4em")
                    .setLabelCaption("备注")
                    .setMaxlength(200)
                    .setMultiLines(true)
            );

            append(
                xui.create("xui.UI.Input")
                    .setHost(host, "xui_ui_input190")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("EMail")
                    .setLeft("0.4166666666666667em")
                    .setTop("7.5em")
                    .setWidth("22.083333333333332em")
                    .setHeight("1.8333333333333333em")
                    .setTabindex(8)
                    .setPlaceholder("接收验证码")
                    .setLabelSize("4em")
                    .setLabelCaption("邮箱")
                    .setValueFormat("^[\\w\\.=-]+@[\\w\\.-]+\\.[\\w\\.-]{2,4}$")
                    .setMaxlength(100)
            );

            append(
                xui.create("xui.UI.Input")
                    .setHost(host, "xui_ui_input191")
                    .setDataBinder("db_hr_user_tab_add")
                    .setDataField("Tel")
                    .setLeft("0.4166666666666667em")
                    .setTop("10em")
                    .setWidth("22.083333333333332em")
                    .setHeight("1.8333333333333333em")
                    .setTabindex(9)
                    .setPlaceholder("信息实名验证")
                    .setLabelSize("4em")
                    .setLabelCaption("手机")
                    .setValueFormat("^-?\\d\\d*$")
                    .setMaxlength(11)
            );

            return children;
            // ]]Code created by CrossUI RAD Studio
        },
        _onready: function (m, t) {
            var ns = this;
            var tool = yr.grid.tool(["save", "del"]);
            tool.sub.push({ id: "pswd", caption: "重置密码", type: "button", imageClass: "spafont spa-icon-config" });
            tool.sub.push({ id: "okpswd", caption: "解码密码", type: "button", imageClass: "xui-uicmd-color" });
            ns._tlb.setItems(tool);//工具栏  
        },
        _onrender: function (m, t) {
            m.xui_ui_tv.setItems(m.hrusertype);
            if (m.CMD === "edit") {
                m.db_hr_user_tab_add.setData(m.ROWS).updateDataToUI();
                m._dlg.setCaption("编辑-用户信息");
            } else if (m.CMD === "add") {
                m._dlg.setCaption("添加-用户信息");
            }
        },
        __tlb_onclick: function (profile, item, group, e, src) {
            var ns = this, uictrl = profile.boxing();
            switch (item.id) {
                case "save":
                    yr.grid.edit(ns, ns.db_hr_user_tab_add, { edit: { Id: ns.ROWID }, add: {} }, function (rsp, d) {
                        if (ns.CMD === "edit") {
                            if (!xui.isEmpty(d.UserType)) ns.NSP._setusertype(ns.NSP, ns.ROWID, d.UserType);
                        }
                        ns.db_hr_user_tab_add.updateDataFromUI(); //移除藏标记
                        yr.uprow(ns.NSP._gr, ns.ROWID, d); //更新List页面数据
                        yr.msg(rsp.data);
                    });
                    break;
                case "del":
                    ns.NSP._tlb.fireItemClickEvent('del');
                    ns._dlg.close();
                    break;
                case "pswd":
                    yr.request(ns.NSP.t.url, { act: "pswd", p: { Id: ns.ROWID } }, function (rsp) {
                        xui.pop("您的新密码", rsp.data);
                    }, ns._dlg);
                    break;
                case "okpswd":

                    yr.request(ns.NSP.t.url, { act: "pswd", p: { Id: ns.ROWID } }, function (rsp) {
                        xui.pop("您的新密码", rsp.data);
                    }, ns._dlg);

                    break;
            }
        }
    }
});