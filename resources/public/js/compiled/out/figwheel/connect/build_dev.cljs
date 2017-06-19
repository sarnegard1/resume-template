(ns figwheel.connect.build-dev (:require [sarah-website.core] [figwheel.client] [figwheel.client.utils]))
(figwheel.client/start {:on-jsload (fn [& x] (if js/sarah-website.core.on-js-reload (apply js/sarah-website.core.on-js-reload x) (figwheel.client.utils/log :debug "Figwheel: :on-jsload hook 'sarah-website.core/on-js-reload' is missing"))), :open-urls ["http://localhost:3444/index.html"], :build-id "dev", :websocket-url "ws://localhost:3449/figwheel-ws"})

