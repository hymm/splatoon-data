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

      ttk['ttkNear'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;
      ttk['ttkMiddle'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;
      ttk['ttkFar'] = getRepeatFrames(data.mDamageMax, data.mRepeatFrame) + data.mPreDelayFrm_SquidMain + data.mStraightFrame + data.mExplosionFrame;

      return ttk;
    }
  }

  function calculateTimeToKill(weaponRawData) {
    var ttk = ttkMap[weaponRawData.class](weaponRawData);

    return update(weaponRawData, {$merge: ttk});
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

      return newData;
    }
  };
})();

export { calculations };
