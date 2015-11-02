/**
 * Created by sarin on 10/30/15.
 */
angular.module('profile').factory('Profile', ['$resource',
    function($resource) {
        return{
            currentProfile:  $resource('api/profile/:profileEmail', {
                profileEmail: '@profileEmail'
                }, {
                    update: {
                    method: 'PUT'
                    }
                }),
            currentChild: $resource('api/profileChild/:parentEmail', {
                parentEmail: '@parentEmail'
                }),
            profileStatuses: $resource('/api/profileStatus/:profileEmailForStatus', {
                profileEmailForStatus: '@profileEmailForStatus'
            })/*,
            getRelationship: $resource('/api/profileCheckRelationship/:profileEmailForRelationship',{
                profileEmailForRelationship: '@profileEmailForRelationship'
        }),
            addFriend: $resource('/api/addPendingFriendRequest/'),

            confirmFriend: $resource('/api/confirmPendingFriendRequest/')*/
        };
    }]);

