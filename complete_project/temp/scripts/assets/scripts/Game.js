cc._RFpush(module, '0486fOqHrJN+6c5PQg5FHh9', 'Game');
// scripts/Game.js

'use strict';

var Player = require('Player');

var Game = cc.Class({
    'extends': cc.Component,

    properties: {
        ground: {
            'default': null,
            type: cc.Node
        },
        player: {
            'default': null,
            type: Player
        },
        groundY: {
            'default': 0,
            visible: false
        }
    },

    // use this for initialization
    onLoad: function onLoad() {
        Game.instance = this;
        // calculate ground y position, to put player onto
        this.groundY = this.ground.y + this.ground.height / 2;
        this.player.node.setPosition(0, this.groundY);
    },

    // called every frame
    update: function update(dt) {}
});

cc._RFpop();