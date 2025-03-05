import { useEffect } from "react";

const ChatBotWidget = () => {
  useEffect(() => {
    window.__ow = window.__ow || {};
    window.__ow.organizationId = "e6204aa0-be41-47b6-8279-b55d90348fbe";
    window.__ow.template_id = "54706fed-40a5-4014-945d-344f3bb2998e";
    window.__ow.integration_name = "manual_settings";
    window.__ow.product_name = "chatbot";

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://cdn.openwidget.com/openwidget.js";
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return null; // No UI needed, just inject the script
};

export default ChatBotWidget;
            