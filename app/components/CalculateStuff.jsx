// take raw splatoon data and calculate stuff about it
import update from 'react-addons-update';

var calculations = (function() {

  function getHitsToKill(damage) {
    return Math.ceil(1/damage);
  }

  function getRepeatFrames(damage, repeatFrames) {
    var hitsToKill = getHitsToKill(damage);
    return (hitsToKill - 1) * repeatFrames;
  }

  var ttkMap = {
    blaster: function(data) {
      var ttk = {};

      // 1 frame of travel time
      ttk['ttkKidDirectMinRange'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_HumanMain + 1;
      ttk['ttkSquidDirectMinRange'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + 1;

      ttk['ttkKidDirectMaxRange'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_HumanMain + data.mStraightFrame;
      ttk['ttkSquidDirectMaxRange'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame;

      ttk['ttkNear'] = getRepeatFrames(data.mDamageNear, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;
      ttk['ttkMiddle'] = getRepeatFrames(data.mDamageMiddle, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;
      ttk['ttkFar'] = getRepeatFrames(data.mDamageFar, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;

      return ttk;
    }
  }

  function calculateTimeToKill(weaponRawData) {
    var ttk = ttkMap[weaponRawData.class](weaponRawData);

    return update(weaponRawData, {$merge: ttk});
  }

  var rangeMap = {
    blaster: function(data) {
      var ranges = {};

      //need to add gun length to this value
      ranges['rangeStraight'] = data.mStraightFrame * data.mInitVel;

      ranges['rangeNear'] = ranges.rangeStraight + data.mCollisionRadiusNear;
      ranges['rangeMiddle'] = ranges.rangeStraight + data.mCollisionRadiusMiddle;
      ranges['rangeFar'] = ranges.rangeStraight + data.mCollisionRadiusFar;

      ranges['rangeSplashMin'] = ranges.rangeStraight - data.mCollisionRadiusFar;

      return ranges;
    }
  }

  function calculateRanges(weaponRawData) {
    var ranges = rangeMap[weaponRawData.class](weaponRawData);

    return update(weaponRawData, {$merge: ranges});
  }

  return {
    calculate: function(rawData) {
      var newData = rawData.map(function(weaponData) {
        if (weaponData.class === 'blaster') {
          return calculateTimeToKill(weaponData);
        } else {
          return weaponData;
        }
      });

      newData = newData.map(function(weaponData) {
        if (weaponData.class === 'blaster') {
          return calculateRanges(weaponData);
        } else {
          return weaponData;
        }
      });

      return newData;
    }
  };
})();

export { calculations };
