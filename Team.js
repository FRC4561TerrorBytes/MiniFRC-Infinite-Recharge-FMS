class Team {
  constructor (color) {
    this.color = color
    this.totalScore = 0
    this.highGoalScore = 0
    this.lowGoalScore = 0
    this.ballNum = 0
    this.climb = 0
    this.endgame = 0
    this.rankingPoint = 0
  }

  /* eslint-disable */
  static PointType = {
    INITIATION_LINE: 'INITIATION_LINE',
    HIGH_GOAL: 'HIGH_GOAL',
    LOW_GOAL: 'LOW_GOAL',
    ROTATION_CONTROL: 'ROTATION_CONTROL',
    POSITION_CONTROL: 'POSITION_CONTROL',
    CLIMB: 'CLIMB',
    PARK: 'PARK',
    BALANCE: 'BALANCE'
  }

  static PointValues = {
    'INITIATION_LINE': 5,
    'HIGH_GOAL': 2,
    'LOW_GOAL': 1,
    'ROTATION_CONTROL': 10,
    'POSITION_CONTROL': 20,
    'CLIMB': 15,
    'PARK': 5,
    'BALANCE': 15
  }
  /* eslint-disable */

  static Foul = {
    'REGULAR': 3,
    'TECH': 6
  }

  updateScore(pointType, isAuto, del) {
    const num = (del) ? -1 : 1
    const auto = (isAuto) ? 2 : 1

    switch (pointType) {
      case Team.PointType.HIGH_GOAL:
        this.highGoalScore += (Team.PointValues[pointType] * num * auto)
        this.totalScore += (Team.PointValues[pointType] * num * auto)
        this.ballNum += num
        break
      case Team.PointType.LOW_GOAL:
        this.lowGoalScore += (Team.PointValues[pointType] * num * auto)
        this.totalScore += (Team.PointValues[pointType] * num * auto)
        this.ballNum += num
        break
      case Team.PointType.ROTATION_CONTROL:
        this.totalScore += (Team.PointValues[pointType] * num)
        break
      case Team.PointType.POSITION_CONTROL:
        this.totalScore += (Team.PointValues[pointType] * num)
        this.rankingPoint += num
        break
      case Team.PointType.PARK:
        this.totalScore += (Team.PointValues[pointType] * num)
        this.endgame += (Team.PointValues[pointType] * num)
        break
      case Team.PointType.CLIMB:
        this.totalScore += (Team.PointValues[pointType] * num)
        this.endgame += (Team.PointValues[pointType] * num)
        break
      case Team.PointType.BALANCE:
        this.totalScore += (Team.PointValues[pointType] * num)
        this.endgame += (Team.PointValues[pointType] * num)
        break
      case Team.PointType.INITIATION_LINE:
        if (isAuto) this.totalScore += (Team.PointValues[pointType] * num)
        break
    }

    // No negatives
    if (this.totalScore < 0) this.totalScore = 0
    if (this.highGoalScore < 0) this.highGoalScore = 0
    if (this.lowGoalScore < 0) this.lowGoalScore = 0
    if (this.rankingPoint < 0) this.rankingPoint = 0
    if (this.endgame < 0) this.endgame = 0


  }

  getScore() {
    return this.totalScore
  }
}
