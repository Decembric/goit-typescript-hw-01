enum DayOfWeek {
 Monday,
 Tuesday,
 Wednesday,
 Thursday,
 Friday,
 Saturday,
 Sunday
}


const isWeekend = (status: DayOfWeek): void => {
  if (status === DayOfWeek.Sunday || status === DayOfWeek.Saturday) {
    console.log('It is a weekend')
  }
  console.log('It is a working day')
}

isWeekend(DayOfWeek.Sunday)
isWeekend(DayOfWeek.Friday)
