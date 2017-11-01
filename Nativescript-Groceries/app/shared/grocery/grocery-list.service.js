"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var http_1 = require("@angular/http");
var Rx_1 = require("rxjs/Rx");
require("rxjs/add/operator/map");
var config_1 = require("../config");
var grocery_1 = require("./grocery");
var GroceryListService = (function () {
    function GroceryListService(http) {
        this.http = http;
    }
    GroceryListService.prototype.load = function () {
        var headers = new http_1.Headers;
        headers.append("Authorization", "Bearer " + config_1.Config.token);
        return this.http.get(config_1.Config.apiUrl + "Groceries", {
            headers: headers
        })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            var groceryList = [];
            data.Result.forEach(function (grocery) {
                groceryList.push(new grocery_1.Grocery(grocery.Id, grocery.Name));
            });
            return groceryList;
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.add = function (name) {
        var headers = new http_1.Headers();
        headers.append('Authorization', 'Bearer ' + config_1.Config.token);
        headers.append('Content-Type', 'application/json');
        return this.http.post(config_1.Config.apiUrl + 'Groceries', JSON.stringify({
            Name: name
        }), { headers: headers })
            .map(function (res) { return res.json(); })
            .map(function (data) {
            return new grocery_1.Grocery(data.Result.Id, name);
        })
            .catch(this.handleErrors);
    };
    GroceryListService.prototype.handleErrors = function (error) {
        console.log(JSON.stringify(error.json()));
        return Rx_1.Observable.throw(error);
    };
    return GroceryListService;
}());
GroceryListService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], GroceryListService);
exports.GroceryListService = GroceryListService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ3JvY2VyeS1saXN0LnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJncm9jZXJ5LWxpc3Quc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxzQ0FBd0Q7QUFDeEQsOEJBQXFDO0FBQ3JDLGlDQUErQjtBQUUvQixvQ0FBbUM7QUFDbkMscUNBQW9DO0FBR3BDLElBQWEsa0JBQWtCO0lBQzNCLDRCQUFvQixJQUFVO1FBQVYsU0FBSSxHQUFKLElBQUksQ0FBTTtJQUU5QixDQUFDO0lBRUQsaUNBQUksR0FBSjtRQUNJLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxDQUFDO1FBRTFCLE9BQU8sQ0FBQyxNQUFNLENBQUMsZUFBZSxFQUFFLFNBQVMsR0FBRyxlQUFNLENBQUMsS0FBSyxDQUFDLENBQUM7UUFFMUQsTUFBTSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLGVBQU0sQ0FBQyxNQUFNLEdBQUcsV0FBVyxFQUFFO1lBQzlDLE9BQU8sRUFBRSxPQUFPO1NBQ25CLENBQUM7YUFDRCxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxJQUFJLFdBQVcsR0FBRyxFQUFFLENBQUM7WUFDckIsSUFBSSxDQUFDLE1BQU0sQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUN4QixXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksaUJBQU8sQ0FBQyxPQUFPLENBQUMsRUFBRSxFQUFFLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQzVELENBQUMsQ0FBQyxDQUFDO1lBQ0gsTUFBTSxDQUFDLFdBQVcsQ0FBQztRQUN2QixDQUFDLENBQUM7YUFDRCxLQUFLLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQzlCLENBQUM7SUFFRCxnQ0FBRyxHQUFILFVBQUksSUFBWTtRQUNaLElBQUksT0FBTyxHQUFHLElBQUksY0FBTyxFQUFFLENBQUM7UUFDNUIsT0FBTyxDQUFDLE1BQU0sQ0FBQyxlQUFlLEVBQUUsU0FBUyxHQUFHLGVBQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsTUFBTSxDQUFDLGNBQWMsRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBRW5ELE1BQU0sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FDakIsZUFBTSxDQUFDLE1BQU0sR0FBRyxXQUFXLEVBQzNCLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDWCxJQUFJLEVBQUUsSUFBSTtTQUNiLENBQUMsRUFDRixFQUFDLE9BQU8sRUFBRSxPQUFPLEVBQUMsQ0FDckI7YUFDQSxHQUFHLENBQUMsVUFBQSxHQUFHLElBQUksT0FBQSxHQUFHLENBQUMsSUFBSSxFQUFFLEVBQVYsQ0FBVSxDQUFDO2FBQ3RCLEdBQUcsQ0FBQyxVQUFBLElBQUk7WUFDTCxNQUFNLENBQUMsSUFBSSxpQkFBTyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsRUFBRSxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzdDLENBQUMsQ0FBQzthQUNELEtBQUssQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUM7SUFDOUIsQ0FBQztJQUVELHlDQUFZLEdBQVosVUFBYSxLQUFlO1FBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxLQUFLLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxlQUFVLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ25DLENBQUM7SUFDTCx5QkFBQztBQUFELENBQUMsQUEvQ0QsSUErQ0M7QUEvQ1ksa0JBQWtCO0lBRDlCLGlCQUFVLEVBQUU7cUNBRWlCLFdBQUk7R0FEckIsa0JBQWtCLENBK0M5QjtBQS9DWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEh0dHAsIEhlYWRlcnMsIFJlc3BvbnNlIH0gZnJvbSBcIkBhbmd1bGFyL2h0dHBcIjtcbmltcG9ydCB7IE9ic2VydmFibGUgfSBmcm9tIFwicnhqcy9SeFwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3IvbWFwXCI7XG5cbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi9jb25maWdcIjtcbmltcG9ydCB7IEdyb2NlcnkgfSBmcm9tIFwiLi9ncm9jZXJ5XCI7XG5cbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBHcm9jZXJ5TGlzdFNlcnZpY2Uge1xuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgaHR0cDogSHR0cCkge1xuXG4gICAgfVxuXG4gICAgbG9hZCgpIHtcbiAgICAgICAgbGV0IGhlYWRlcnMgPSBuZXcgSGVhZGVycztcblxuICAgICAgICBoZWFkZXJzLmFwcGVuZChcIkF1dGhvcml6YXRpb25cIiwgXCJCZWFyZXIgXCIgKyBDb25maWcudG9rZW4pO1xuXG4gICAgICAgIHJldHVybiB0aGlzLmh0dHAuZ2V0KENvbmZpZy5hcGlVcmwgKyBcIkdyb2Nlcmllc1wiLCB7XG4gICAgICAgICAgICBoZWFkZXJzOiBoZWFkZXJzXG4gICAgICAgIH0pXG4gICAgICAgIC5tYXAocmVzID0+IHJlcy5qc29uKCkpXG4gICAgICAgIC5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICBsZXQgZ3JvY2VyeUxpc3QgPSBbXTtcbiAgICAgICAgICAgIGRhdGEuUmVzdWx0LmZvckVhY2goKGdyb2NlcnkpID0+IHtcbiAgICAgICAgICAgICAgICBncm9jZXJ5TGlzdC5wdXNoKG5ldyBHcm9jZXJ5KGdyb2NlcnkuSWQsIGdyb2NlcnkuTmFtZSkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZ3JvY2VyeUxpc3Q7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgYWRkKG5hbWU6IHN0cmluZykge1xuICAgICAgICBsZXQgaGVhZGVycyA9IG5ldyBIZWFkZXJzKCk7XG4gICAgICAgIGhlYWRlcnMuYXBwZW5kKCdBdXRob3JpemF0aW9uJywgJ0JlYXJlciAnICsgQ29uZmlnLnRva2VuKTtcbiAgICAgICAgaGVhZGVycy5hcHBlbmQoJ0NvbnRlbnQtVHlwZScsICdhcHBsaWNhdGlvbi9qc29uJyk7XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuaHR0cC5wb3N0KFxuICAgICAgICAgICAgQ29uZmlnLmFwaVVybCArICdHcm9jZXJpZXMnLFxuICAgICAgICAgICAgSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICAgIE5hbWU6IG5hbWVcbiAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAge2hlYWRlcnM6IGhlYWRlcnN9XG4gICAgICAgIClcbiAgICAgICAgLm1hcChyZXMgPT4gcmVzLmpzb24oKSlcbiAgICAgICAgLm1hcChkYXRhID0+IHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgR3JvY2VyeShkYXRhLlJlc3VsdC5JZCwgbmFtZSk7XG4gICAgICAgIH0pXG4gICAgICAgIC5jYXRjaCh0aGlzLmhhbmRsZUVycm9ycyk7XG4gICAgfVxuXG4gICAgaGFuZGxlRXJyb3JzKGVycm9yOiBSZXNwb25zZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhKU09OLnN0cmluZ2lmeShlcnJvci5qc29uKCkpKTtcbiAgICAgICAgcmV0dXJuIE9ic2VydmFibGUudGhyb3coZXJyb3IpO1xuICAgIH1cbn0iXX0=