import "./AccountController";
import "./AnalyticsController";
import "./HealthController";

class ControllerFactory {
    constructor() {}

    getController(domain) {
        switch (domain) {
            case "accounts":
                return new AccountController();
            case "analytics":
                return new AnalyticsController();
            case "health":
                return new HealthController();
            default:
                return null;
        }
    }
}

export default ControllerFactory;
