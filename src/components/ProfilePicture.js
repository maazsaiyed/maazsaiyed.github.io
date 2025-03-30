
export default function ProfilePicture() {

    return (
        <div>
            <svg width={0} height={0} viewBox="0 0 100 100">
                <defs>
                    <clipPath id="shape">
                        <path d="M 211 35 Q 34 33 64 219 Q -47 463 202 418 Q 315 498 398 404 Q 497 314 431 174 Q 456 -5 211 35" />
                    </clipPath>
                </defs>
            </svg>

            <img src="/resources/profile_pic.png" alt="profile_pic" style={{
                width: 500,
                height: 500,
                objectFit: "cover",
                transform: "scale(1.2)",
                objectPosition: "100% -10%",
                clipPath: "url(#shape)"
            }} />
        </div>
    );
}