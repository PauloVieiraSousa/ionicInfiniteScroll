"use strict";
angular.module('starter.services', [])
    .service('tasks', function(){
        var self = this;
        self.itens = [{titulo:'action 1'}];
    
        self.add = function (item){
            self.itens.push(item);
        }
        
        self.refresh = function(){
            self.itens.unshift ({titulo:'item -1'});
        }
    
    });
