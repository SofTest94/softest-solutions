export const handleScheduleAppointmentClick = (telephone: string, message: string) => {
  const msg = encodeURIComponent(message);
  const url = `https://wa.me/${telephone}?text=${msg}`;
  window.open(url, '_blank');
};

export const handleSocialMediaClick = (url: string) => {
  window.open(url, '_blank');
};
