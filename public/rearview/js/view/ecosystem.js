define(["view/base","view/dashboardtile"],function(e,s){var t=e.extend({dashboards:[],subscriptions:{"view:addcategory:save":"update","view:adddashboard:save":"update","view:dashboard:render":"destructor","view:dashboard:save":"update"},initialize:function(e){_.bindAll(this),this.templar=e.templar,this.dashboards=[]},render:function(){this.collection.each(function(e){this.dashboards.push(new s({el:this.el,model:e,templar:this.templar}))}.bind(this)),this.paddingFix(),Backbone.Mediator.pub("view:ecosystem:render",{title:"Ecosystem",subtitle:"Rearview Dashboards",nav:{ecosystem:!0,dashboard:!1}})},paddingFix:function(){this.$el.css("padding-bottom","40px")},update:function(e){e&&e.model?e.model:null;this.$el.empty(),this.collection.fetch({success:function(){this.render()}.bind(this)})},destroyDashboards:function(){var e=this;for(viewName in e.dashboards){var s=e.dashboards[viewName];s.destructor(),delete e.dashboards[viewName]}},destructor:function(){var e=this.$el.prev();this.destroySubscriptions(),this.destroyDashboards(),this.off(),this.collection.off(),this.remove(),e.after("<section class='ecosystem-dashboard-wrap'>")}});return t});