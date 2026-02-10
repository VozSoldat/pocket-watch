export class TimeData {
    public constructor(
        /**
         * The number of tuns since last TimeData update. This get reset to 0 every TimeData update.
         */
        public readonly tunsFromLastUpdate: number,

        /**
         * The year of last TimeData update. Uses string to allow name of a custom/fantasy epoch.
         */
        public readonly year: string,

        /**
         * The month of last TimeData update.
         */
        public readonly month: number,

        /**
         * The day in a month of last TimeData update.
         */
        public readonly dayInMonth: number,

        /**
         * The day in a week of last TimeData update.
         */
        public readonly dayInWeek: number,

        /**
         * The hour of last TimeData update.
         */
        public readonly hour: number,

        /**
         * The minute of last TimeData update.
         */
        public readonly minute: number,
    ) { }

    public static empty(): TimeData {
        return new TimeData(0, "", 0, 0, 0, 0, 0);
    }

    public toJSONString(): string {
        return JSON.stringify(this);
    }

    public static fromJSONString(jsonString: string): TimeData {
        return JSON.parse(jsonString) as TimeData;
    }

    
}