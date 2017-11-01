"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var page_1 = require("ui/page");
var color_1 = require("color");
var user_1 = require("../../shared/user/user");
var user_service_1 = require("../../shared/user/user.service");
var LoginComponent = (function () {
    function LoginComponent(router, userService, page) {
        this.router = router;
        this.userService = userService;
        this.page = page;
        this.isLoggedIn = true;
        this.user = new user_1.User();
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.page.actionBarHidden = true;
        this.page.backgroundImage = "res://bg_login";
    };
    LoginComponent.prototype.submit = function () {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address");
            return;
        }
        if (this.isLoggedIn) {
            this.login();
        }
        else {
            this.signUp();
        }
    };
    LoginComponent.prototype.login = function () {
        var _this = this;
        this.userService.login(this.user)
            .subscribe(function () { return _this.router.navigate(['/list']); }, function (error) { return alert('Unfortunately we could not find your account'); });
    };
    LoginComponent.prototype.signUp = function () {
        var _this = this;
        this.userService.register(this.user)
            .subscribe(function () {
            alert('Your account was successfully created');
            _this.toggleDisplay();
        }, function () { return alert('Unfortunately we are unable to create your account'); });
    };
    LoginComponent.prototype.toggleDisplay = function () {
        this.isLoggedIn = !this.isLoggedIn;
        var container = this.container.nativeElement;
        container.animate({
            backgroundColor: this.isLoggedIn ? new color_1.Color('#fff') : new color_1.Color('#e67e22'),
            duration: 200
        });
    };
    return LoginComponent;
}());
__decorate([
    core_1.ViewChild('container'),
    __metadata("design:type", core_1.ElementRef)
], LoginComponent.prototype, "container", void 0);
LoginComponent = __decorate([
    core_1.Component({
        selector: "my-app",
        providers: [user_service_1.UserService],
        moduleId: module.id,
        templateUrl: "login.html",
        styleUrls: ["login-common.css", "login.css"]
    }),
    __metadata("design:paramtypes", [router_1.Router,
        user_service_1.UserService,
        page_1.Page])
], LoginComponent);
exports.LoginComponent = LoginComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW4uY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibG9naW4uY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQXlFO0FBQ3pFLDBDQUF5QztBQUV6QyxnQ0FBK0I7QUFDL0IsK0JBQThCO0FBRzlCLCtDQUE4QztBQUM5QywrREFBNkQ7QUFVN0QsSUFBYSxjQUFjO0lBS3pCLHdCQUNVLE1BQWMsRUFDZCxXQUF3QixFQUN4QixJQUFVO1FBRlYsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUNkLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBQ3hCLFNBQUksR0FBSixJQUFJLENBQU07UUFOcEIsZUFBVSxHQUFHLElBQUksQ0FBQztRQVFoQixJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksV0FBSSxFQUFFLENBQUM7SUFDekIsQ0FBQztJQUVELGlDQUFRLEdBQVI7UUFDRSxJQUFJLENBQUMsSUFBSSxDQUFDLGVBQWUsR0FBRyxJQUFJLENBQUM7UUFDakMsSUFBSSxDQUFDLElBQUksQ0FBQyxlQUFlLEdBQUcsZ0JBQWdCLENBQUM7SUFDL0MsQ0FBQztJQUVELCtCQUFNLEdBQU47UUFDRSxFQUFFLENBQUEsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzdCLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDO1lBQ3JDLE1BQU0sQ0FBQztRQUNULENBQUM7UUFFRCxFQUFFLENBQUEsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUMsQ0FBQztZQUNuQixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixDQUFDO1FBQ0QsSUFBSSxDQUFDLENBQUM7WUFDSixJQUFJLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsQ0FBQztJQUNILENBQUM7SUFFRCw4QkFBSyxHQUFMO1FBQUEsaUJBTUM7UUFMQyxJQUFJLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDO2FBQ2hDLFNBQVMsQ0FDUixjQUFNLE9BQUEsS0FBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxPQUFPLENBQUMsQ0FBQyxFQUEvQixDQUErQixFQUNyQyxVQUFDLEtBQUssSUFBSyxPQUFBLEtBQUssQ0FBQyw4Q0FBOEMsQ0FBQyxFQUFyRCxDQUFxRCxDQUNqRSxDQUFDO0lBQ0osQ0FBQztJQUVELCtCQUFNLEdBQU47UUFBQSxpQkFTQztRQVJDLElBQUksQ0FBQyxXQUFXLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUM7YUFDbkMsU0FBUyxDQUNSO1lBQ0UsS0FBSyxDQUFDLHVDQUF1QyxDQUFDLENBQUM7WUFDL0MsS0FBSSxDQUFDLGFBQWEsRUFBRSxDQUFFO1FBQ3hCLENBQUMsRUFDRCxjQUFNLE9BQUEsS0FBSyxDQUFDLG9EQUFvRCxDQUFDLEVBQTNELENBQTJELENBQ2xFLENBQUM7SUFDSixDQUFDO0lBRUQsc0NBQWEsR0FBYjtRQUNFLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDO1FBRW5DLElBQUksU0FBUyxHQUFTLElBQUksQ0FBQyxTQUFTLENBQUMsYUFBYSxDQUFDO1FBQ25ELFNBQVMsQ0FBQyxPQUFPLENBQUM7WUFDaEIsZUFBZSxFQUFFLElBQUksQ0FBQyxVQUFVLEdBQUcsSUFBSSxhQUFLLENBQUMsTUFBTSxDQUFDLEdBQUcsSUFBSSxhQUFLLENBQUMsU0FBUyxDQUFDO1lBQzNFLFFBQVEsRUFBRSxHQUFHO1NBQ2QsQ0FBQyxDQUFDO0lBQ0wsQ0FBQztJQUNILHFCQUFDO0FBQUQsQ0FBQyxBQTVERCxJQTREQztBQXpEeUI7SUFBdkIsZ0JBQVMsQ0FBQyxXQUFXLENBQUM7OEJBQVksaUJBQVU7aURBQUM7QUFIbkMsY0FBYztJQVIxQixnQkFBUyxDQUFDO1FBQ1QsUUFBUSxFQUFFLFFBQVE7UUFDbEIsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztRQUN4QixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7UUFDbkIsV0FBVyxFQUFFLFlBQVk7UUFDekIsU0FBUyxFQUFFLENBQUMsa0JBQWtCLEVBQUUsV0FBVyxDQUFDO0tBQzdDLENBQUM7cUNBUWtCLGVBQU07UUFDRCwwQkFBVztRQUNsQixXQUFJO0dBUlQsY0FBYyxDQTREMUI7QUE1RFksd0NBQWMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCwgRWxlbWVudFJlZiwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBDb2xvciB9IGZyb20gXCJjb2xvclwiO1xuaW1wb3J0IHsgVmlldyB9IGZyb20gXCJ1aS9jb3JlL3ZpZXdcIjsgXG5cbmltcG9ydCB7IFVzZXIgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlclwiO1xuaW1wb3J0IHsgVXNlclNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3VzZXIvdXNlci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogXCJteS1hcHBcIixcbiAgcHJvdmlkZXJzOiBbVXNlclNlcnZpY2VdLCBcbiAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgdGVtcGxhdGVVcmw6IFwibG9naW4uaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcImxvZ2luLWNvbW1vbi5jc3NcIiwgXCJsb2dpbi5jc3NcIl1cbn0pXG5cbmV4cG9ydCBjbGFzcyBMb2dpbkNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdHtcbiAgdXNlcjogVXNlcjtcbiAgaXNMb2dnZWRJbiA9IHRydWU7XG4gIEBWaWV3Q2hpbGQoJ2NvbnRhaW5lcicpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiBcbiAgY29uc3RydWN0b3IoXG4gICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcixcbiAgICBwcml2YXRlIHVzZXJTZXJ2aWNlOiBVc2VyU2VydmljZSxcbiAgICBwcml2YXRlIHBhZ2U6IFBhZ2VcbiAgKSB7XG4gICAgdGhpcy51c2VyID0gbmV3IFVzZXIoKTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucGFnZS5hY3Rpb25CYXJIaWRkZW4gPSB0cnVlO1xuICAgIHRoaXMucGFnZS5iYWNrZ3JvdW5kSW1hZ2UgPSBcInJlczovL2JnX2xvZ2luXCI7XG4gIH1cblxuICBzdWJtaXQoKSB7XG4gICAgaWYoIXRoaXMudXNlci5pc1ZhbGlkRW1haWwoKSkge1xuICAgICAgYWxlcnQoXCJFbnRlciBhIHZhbGlkIGVtYWlsIGFkZHJlc3NcIik7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIFxuICAgIGlmKHRoaXMuaXNMb2dnZWRJbikge1xuICAgICAgdGhpcy5sb2dpbigpO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgIHRoaXMuc2lnblVwKCk7XG4gICAgfVxuICB9XG5cbiAgbG9naW4oKSB7XG4gICAgdGhpcy51c2VyU2VydmljZS5sb2dpbih0aGlzLnVzZXIpXG4gICAgLnN1YnNjcmliZShcbiAgICAgICgpID0+IHRoaXMucm91dGVyLm5hdmlnYXRlKFsnL2xpc3QnXSksXG4gICAgICAoZXJyb3IpID0+IGFsZXJ0KCdVbmZvcnR1bmF0ZWx5IHdlIGNvdWxkIG5vdCBmaW5kIHlvdXIgYWNjb3VudCcpXG4gICAgKTtcbiAgfVxuXG4gIHNpZ25VcCgpIHtcbiAgICB0aGlzLnVzZXJTZXJ2aWNlLnJlZ2lzdGVyKHRoaXMudXNlcilcbiAgICAuc3Vic2NyaWJlKFxuICAgICAgKCkgPT4ge1xuICAgICAgICBhbGVydCgnWW91ciBhY2NvdW50IHdhcyBzdWNjZXNzZnVsbHkgY3JlYXRlZCcpO1xuICAgICAgICB0aGlzLnRvZ2dsZURpc3BsYXkoKSA7XG4gICAgICB9LFxuICAgICAgKCkgPT4gYWxlcnQoJ1VuZm9ydHVuYXRlbHkgd2UgYXJlIHVuYWJsZSB0byBjcmVhdGUgeW91ciBhY2NvdW50JylcbiAgICApO1xuICB9XG5cbiAgdG9nZ2xlRGlzcGxheSgpIHtcbiAgICB0aGlzLmlzTG9nZ2VkSW4gPSAhdGhpcy5pc0xvZ2dlZEluO1xuXG4gICAgbGV0IGNvbnRhaW5lciA9IDxWaWV3PnRoaXMuY29udGFpbmVyLm5hdGl2ZUVsZW1lbnQ7XG4gICAgY29udGFpbmVyLmFuaW1hdGUoe1xuICAgICAgYmFja2dyb3VuZENvbG9yOiB0aGlzLmlzTG9nZ2VkSW4gPyBuZXcgQ29sb3IoJyNmZmYnKSA6IG5ldyBDb2xvcignI2U2N2UyMicpLFxuICAgICAgZHVyYXRpb246IDIwMFxuICAgIH0pO1xuICB9XG59Il19