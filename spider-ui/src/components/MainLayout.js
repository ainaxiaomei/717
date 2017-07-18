import React, { Component, PropTypes } from 'react';
const MainLayout = React.createClass({
  render() {
    return (
      <div>
        <aside class="Hui-aside">
          <div class="menu_dropdown bk_2">
            <dl id="menu-article">
              <dt><i class="Hui-iconfont">&#xe616;</i> 添加网站<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
              <dd>
                <ul>
                  <li><a data-href="article-list.html" data-title="资讯管理" href="javascript:void(0)">资讯管理</a></li>
                </ul>
              </dd>
            </dl>
            <dl id="menu-member">
              <dt><i class="Hui-iconfont">&#xe60d;</i> 会员管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
              <dd>
                <ul>
                  <li><a data-href="member-list.html" data-title="会员列表" href="javascript:;">会员列表</a></li>
                  <li><a data-href="member-del.html" data-title="删除的会员" href="javascript:;">删除的会员</a></li>
                  <li><a data-href="member-level.html" data-title="等级管理" href="javascript:;">等级管理</a></li>
                  <li><a data-href="member-scoreoperation.html" data-title="积分管理" href="javascript:;">积分管理</a></li>
                  <li><a data-href="member-record-browse.html" data-title="浏览记录" href="javascript:void(0)">浏览记录</a></li>
                  <li><a data-href="member-record-download.html" data-title="下载记录" href="javascript:void(0)">下载记录</a></li>
                  <li><a data-href="member-record-share.html" data-title="分享记录" href="javascript:void(0)">分享记录</a></li>
                </ul>
              </dd>
            </dl>

            <dl id="menu-tongji">
              <dt><i class="Hui-iconfont">&#xe61a;</i> 系统统计<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
              <dd>
                <ul>
                  <li><a data-href="charts-1.html" data-title="折线图" href="javascript:void(0)">收录统计</a></li>
                  <li><a data-href="charts-2.html" data-title="时间轴折线图" href="javascript:void(0)">蜘蛛统计</a></li>
                  <li><a data-href="charts-3.html" data-title="区域图" href="javascript:void(0)">区域图</a></li>
                  <li><a data-href="charts-4.html" data-title="柱状图" href="javascript:void(0)">柱状图</a></li>
                  <li><a data-href="charts-5.html" data-title="饼状图" href="javascript:void(0)">饼状图</a></li>
                  <li><a data-href="charts-6.html" data-title="3D柱状图" href="javascript:void(0)">3D柱状图</a></li>
                  <li><a data-href="charts-7.html" data-title="3D饼状图" href="javascript:void(0)">3D饼状图</a></li>
                </ul>
              </dd>
            </dl>
            <dl id="menu-system">
              <dt><i class="Hui-iconfont">&#xe62e;</i> 系统管理<i class="Hui-iconfont menu_dropdown-arrow">&#xe6d5;</i></dt>
              <dd>
                <ul>
                  <li><a data-href="system-base.html" data-title="系统设置" href="javascript:void(0)">系统设置</a></li>
                  <li><a data-href="system-category.html" data-title="栏目管理" href="javascript:void(0)">栏目管理</a></li>
                  <li><a data-href="system-data.html" data-title="数据字典" href="javascript:void(0)">数据字典</a></li>
                  <li><a data-href="system-shielding.html" data-title="屏蔽词" href="javascript:void(0)">屏蔽词</a></li>
                  <li><a data-href="system-log.html" data-title="系统日志" href="javascript:void(0)">系统日志</a></li>
                </ul>
              </dd>
            </dl>
          </div>
        </aside>
        <div class="dislpayArrow hidden-xs">
          <a class="pngfix" href="javascript:void(0);" onClick="displaynavbar(this)"></a>
        </div>
        <section class="Hui-article-box">
          <div id="Hui-tabNav" class="Hui-tabNav hidden-xs">
            <div class="Hui-tabNav-wp">
              <ul id="min_title_list" class="acrossTab cl">
                <li class="active">
                  <span title="我的桌面" data-href="welcome.html">我的桌面</span>
                  <em></em></li>
              </ul>
            </div>
            <div class="Hui-tabNav-more btn-group"><a id="js-tabNav-prev" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d4;</i></a><a id="js-tabNav-next" class="btn radius btn-default size-S" href="javascript:;"><i class="Hui-iconfont">&#xe6d7;</i></a></div>
          </div>
          <div id="iframe_box" class="Hui-article">
            <div class="show_iframe">
              <div style="display:none" class="loading"></div>
              <iframe scrolling="yes" frameborder="0" src="welcome.html"></iframe>
            </div>
          </div>
        </section>

        <div class="contextMenu" id="Huiadminmenu">
          <ul>
            <li id="closethis">关闭当前 </li>
            <li id="closeall">关闭全部 </li>
          </ul>
        </div>
      </div>

    );
  },
});

export default MainLayout
