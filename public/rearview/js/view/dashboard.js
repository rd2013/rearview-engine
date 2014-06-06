define(["view/base","model/monitor","collection/monitor","view/smallmonitor","view/expandedmonitor","view/addmonitor","view/resetmonitor","view/alerttimeline","codemirror","codemirror-ruby","jquery-validate"],function(t,e,i,r,s,o,a,n){var d=t.extend({rowMonitorLimit:3,events:{"slid .carousel":"advanceCarousel"},subscriptions:{"view:expandedmonitor:open":"hideDash","view:expandedmonitor:exit":"updateDash","view:addmonitor:close":"showDash","view:addmonitor:save":"updateDash","view:addmonitor:show":"hideDash","view:smallmonitor:edit":"editMonitor","view:alerttimeline:troubleshoot":"editMonitor"},hidePrevCaption:function(){this.$el.find(".carousel-caption").parent().children(".carousel-caption p").hide()},initialize:function(t){_.bindAll(this),this.templar=t.templar,this.dashboardId=t.dashboardId?t.dashboardId:null,this.categoryId=t.categoryId?t.categoryId:null,this.user=t.user?t.user:null,this.router=t.router?t.router:null,this.categories=[],this.monitors=[],this.monitorCollections=[],this.currentOrder=[],this.carouselIndex=0,this.expandedMonitorView=new s({el:$(".edit-monitor-wrap"),user:this.user,templar:this.templar,router:this.router}),this.addMonitorView=new o({model:new e({dashboardId:this.dashboardId}),user:this.user,dashboardId:this.dashboardId,templar:this.templar}),this.alertTimelineView=new n({el:$(".timeline-wrap"),collection:this.collection,dashboardId:this.dashboardId,user:this.user,status:this.checkDashboardAlertState(),templar:this.templar}),this.resetMonitorView=new a({el:$(".reset-monitor-wrap"),templar:this.templar}),this.addHelpers(),Backbone.Mediator.pub("view:dashboard:init")},render:function(){return this.initMonitors(),this},initMonitors:function(){this.getCategories(),this.categories.length&&null==this.categoryId&&Backbone.Mediator.pub("view:dashboard:category",this.setCategoryId(this.categories[this.carouselIndex].id)),this.getDashboardInfo(this.dashboardId,function(t){Backbone.Mediator.pub("view:dashboard:render",{title:t,subtitle:this.getDashboardSubtitle(this.getCategoryIndex()),nav:{ecosystem:!1,dashboard:!0},dashboardId:this.dashboardId})}.bind(this)),this.updateMonitorList(),this.setupCarousel(),this.setupDrop(),this.goToCategory(),Backbone.Mediator.pub("view:dashboard:complete")},setCategories:function(t){_.each(t,function(t,e){t.children.length&&this.categories.splice(e,1)},this),this.categories=t},getCategories:function(){$.ajax({url:"/dashboards/"+this.dashboardId+"/children",async:!1,success:function(t){var e=t;this.setCategories(e)}.bind(this)})},setupDrop:function(){this.$monitorDragWraps=$(".small-monitor-drag"),this.$monitorWraps=$(".small-monitor-wrap"),this.$monitorWraps.droppable({accept:".small-monitor",over:function(t,e){$(t.target).addClass("active-drop"),e.draggable.draggable("option","revert",!1)},out:function(t,e){$(t.target).removeClass("active-drop"),e.draggable.draggable("option","revert",!0)},drop:function(t){$(t.target).removeClass("active-drop"),$(window).trigger("resize")}})},setupCarousel:function(){this.$carousel=$("#dashboardCarousel").carousel({interval:!1}),this.$el.find(".icon-chevron-sign-right").click(function(){this.$carousel.carousel("next")}.bind(this)),this.$el.find(".icon-chevron-sign-left").click(function(){this.$carousel.carousel("prev")}.bind(this))},getDashboardSubtitle:function(t){this.getCategories();var e="";return e=this.categories.length>=1&&this.parentDashboardInfo.id!==this.getCategoryId()?_.str.capitalize(this.categories[t].name)+" Dashboard":"Monitor Dashboard"},publishDashboardSubtitle:function(t){Backbone.Mediator.pub("view:dashboard:render",{subtitle:this.getDashboardSubtitle(t)})},advanceCarousel:function(t){t&&t.stopPropagation(),this.carouselIndex=this.$el.find(".item.active").index(".item"),this.setCategoryId(this.categories.length?this.categories[this.carouselIndex].id:this.getCategoryId()),this.router.navigate("dash/"+this.dashboardId+"/category/"+this.getCategoryId()),this.$el.find(".dashboard-"+this.getCategoryId()).css({"min-height":this.$el.find(".dashboard-"+this.getCategoryId()+" .monitor-grid").height()+40}),this.publishDashboardSubtitle(this.carouselIndex),Backbone.Mediator.pub("view:dashboard:category",this.getCategoryId()),$(window).trigger("resize")},getCategoryIndex:function(){var t=0;return _.each(this.categories,function(e,i){this.getCategoryId()===e.id&&(t=i)},this),t},goToCategory:function(){this.getCategoryIndex()&&(this.$carousel.toggleClass("slide"),this.$carousel.carousel(this.getCategoryIndex()),this.$carousel.toggleClass("slide")),this.categories.length<=1&&this.$el.find(".carousel-indicators, .carousel-control").hide()},getCategoryId:function(){return this.categoryId},setCategoryId:function(t){return this.categoryId=_.isNull(t)?this.categoryId:t,this.getCategoryId()},getMonitorOrder:function(){var t=this.user.get("preferences");if(this.categories.length)_.each(this.categories,function(e){var i=t.dashboards&&!_.isEmpty(t.dashboards[e.id])?t.dashboards[e.id].order:[];this.currentOrder[e.id]=i},this);else{var e=t.dashboards&&!_.isEmpty(t.dashboards[this.parentDashboardInfo.id])?t.dashboards[this.parentDashboardInfo.id].order:[];this.currentOrder[this.parentDashboardInfo.id]=e}return this.currentOrder},getDashboardInfo:function(t,e){$.ajax({url:"/dashboards/"+t,async:!1,success:function(t){this.parentDashboardInfo=t,"function"==typeof e&&e(this.parentDashboardInfo.name)}.bind(this),error:function(){}.bind(this),complete:function(){}.bind(this)})},editMonitor:function(t){this.expandedMonitorView.render(t,this.categories,this.getCategoryId(),this.dashboardId)},updateDash:function(t){t&&t.status&&"error"!=t.status&&(this.collection=new i(null,{dashboardId:this.dashboardId}),this.reinitializeDash(t)),this.showDash()},reinitializeDash:function(){this.$el.parent();this.router.navigate(),this.getCategoryId()?this.router.navigate("dash/"+this.dashboardId+"/category/"+this.getCategoryId(),{trigger:!0}):this.router.navigate("dash/"+this.dashboardId,{trigger:!0})},hideDash:function(){this.$el.hide()},showDash:function(){this.$el.show(),$(window).trigger("resize")},updateSavedMonitorStatus:function(t){var e=t?t.model:null;e&&_.each(this.monitors,function(t){t.model.get("id")===e.get("id")&&t.nextRun()})},checkDashboardAlertState:function(){return this.collection.each(function(t){"success"!==t.get("status")&&"undefined"!=typeof t.get("status")&&t.get("active")&&(this.dashboardAlert=!0)}),this.dashboardAlert&&Backbone.Mediator.pub("view:dashboard:alert"),this.dashboardAlert},updateMonitorList:function(){var t=[],e=[];if(this.getMonitorOrder(),Handlebars.registerHelper("mod",function(t,e){return parseInt(t,10)%this.rowMonitorLimit===0?e.fn(this):void 0}.bind(this)),this.categories.length)_.each(this.categories,function(t){var e=new i(null,{dashboardId:t.id}),r=this.currentOrder[t.id];if(0!==r.length){var s=_.difference(e.pluck("id"),r);r=_.union(r,s),e.filterById(r)}this.monitorCollections.push(e),t.monitors=e.toJSON()},this),e=this.categories;else{var t=new i(null,{dashboardId:this.parentDashboardInfo.id}),s=this.currentOrder.length?this.currentOrder[this.parentDashboardInfo.id]:[];if(0!==s.length){var o=_.difference(t.pluck("id"),s);s=_.union(s,o),t.filterById(s)}this.monitorCollections.push(t),this.parentDashboardInfo.monitors=t.toJSON(),e.push(this.parentDashboardInfo)}this.templar.render({path:"dashboard",el:this.$el,data:{categories:e}}),_.each(this.monitorCollections,function(t){t.each(function(t){this.monitors.push(new r({el:this.$el.find(".small-monitor-"+t.get("id"))[0],model:t,dashboardId:this.dashboardId,templar:this.templar,user:this.user}).render())}.bind(this))},this)},destroyMonitors:function(){for(viewName in this.monitors){var t=this.monitors[viewName];t.destructor(),delete this.monitors[viewName]}},destructor:function(){var t=this.$el.parent();this.destroyMonitors(),this.collection.off("remove",this.reinitializeDash,this),this.destroySubscriptions(),this.expandedMonitorView.destructor(),this.addMonitorView.destructor(),this.alertTimelineView.destructor(),this.resetMonitorView.destructor(),this.monitors=[],this.categories=[],this.$el.empty(),this.$el.remove(),this.off(),t.prepend("<div class='monitor-panel container clearfix'>")}});return d});