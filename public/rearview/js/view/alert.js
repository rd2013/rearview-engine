define(["view/base"],function(e){var r=e.extend({subscriptions:{"view:adddashboard:save":"render","view:addcategory:save":"render","view:addmonitor:save":"render","view:addmonitor:test":"render","view:expandedmonitor:delete":"render","view:expandedmonitor:save":"render","view:expandedmonitor:test":"render","view:smallmonitor:save":"render","view:dashboard:save":"render","view:resetmonitor:reset":"render"},initialize:function(e){_.bindAll(this,"render","activate","deactivate"),this.templar=e.templar},render:function(e){if(e.tryJSON)try{e.errors=JSON.parse(e.tryJSON).errors}catch(r){e.raw=e.tryJSON}this.templar.render({path:"alert",el:this.$el,data:e}),this.activate()},activate:function(){this.$el.addClass("active"),_.delay(this.deactivate,2e4)},deactivate:function(){this.$el.removeClass("active")}});return r});