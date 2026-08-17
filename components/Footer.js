export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="fbrand">The Natural Health Guide</div>
        <p className="disclaimer">
          This guide is intended for educational and informational purposes
          only and is not a substitute for professional medical advice,
          diagnosis, or treatment. Always consult a qualified healthcare
          provider before starting any new remedy, supplement, dietary
          change, or wellness practice, especially if you are pregnant,
          nursing, taking medication, or managing a health condition.
        </p>
        <div className="fbottom">
          <span>© {new Date().getFullYear()} The Natural Health Guide. All rights reserved.</span>
          <span>Contact · Privacy Policy · Terms</span>
        </div>
      </div>
    </footer>
  );
}
