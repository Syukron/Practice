"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var validator = require("email-validator");
var User = (function () {
    function User() {
    }
    User.prototype.isValidEmail = function () {
        return validator.validate(this.email);
    };
    return User;
}());
exports.User = User;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidXNlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbInVzZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxJQUFJLFNBQVMsR0FBRyxPQUFPLENBQUMsaUJBQWlCLENBQUMsQ0FBQztBQUUzQztJQUFBO0lBT0EsQ0FBQztJQUhHLDJCQUFZLEdBQVo7UUFDSSxNQUFNLENBQUMsU0FBUyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7SUFDMUMsQ0FBQztJQUNMLFdBQUM7QUFBRCxDQUFDLEFBUEQsSUFPQztBQVBZLG9CQUFJIiwic291cmNlc0NvbnRlbnQiOlsidmFyIHZhbGlkYXRvciA9IHJlcXVpcmUoXCJlbWFpbC12YWxpZGF0b3JcIik7XG5cbmV4cG9ydCBjbGFzcyBVc2VyIHtcbiAgICBlbWFpbDogc3RyaW5nO1xuICAgIHBhc3N3b3JkOiBzdHJpbmc7XG5cbiAgICBpc1ZhbGlkRW1haWwoKSB7XG4gICAgICAgIHJldHVybiB2YWxpZGF0b3IudmFsaWRhdGUodGhpcy5lbWFpbCk7XG4gICAgfVxufSJdfQ==