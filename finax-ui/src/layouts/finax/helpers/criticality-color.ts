const handleCriticalityIcon = (criticality: number) => {
  const criticalityColors = ['#36B37E', '#FCC216', '#E8503E'];

  return criticalityColors[criticality];
};

export default handleCriticalityIcon;
