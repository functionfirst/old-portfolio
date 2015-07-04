angular.module('cacheService', [])

.factory('CacheService', function($cacheFactory) {
	return $cacheFactory('CacheService');
});