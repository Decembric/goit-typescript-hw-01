enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}


const isWeekend = (status: DayOfWeek): boolean => {
  return status === DayOfWeek.Saturday || status === DayOfWeek.Sunday;
}

isWeekend(DayOfWeek.Sunday)
isWeekend(DayOfWeek.Friday)
