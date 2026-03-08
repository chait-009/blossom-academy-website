const AnnouncementBanner = () => {
  return (
    <div className="fixed top-16 left-0 right-0 z-40 bg-primary text-primary-foreground overflow-hidden">
      <div className="animate-scroll-left whitespace-nowrap py-2 text-sm font-medium flex gap-16">
        {[...Array(4)].map((_, i) => (
          <span key={i} className="inline-block">
            Admissions Open for 2026–27 &nbsp;|&nbsp; Classes for 8th–12th (SSC/CBSE) &nbsp;|&nbsp; JEE / NEET / MHT-CET / NDA Preparation &nbsp;|&nbsp; Call: 99221 97616
          </span>
        ))}
      </div>
    </div>
  );
};

export default AnnouncementBanner;
