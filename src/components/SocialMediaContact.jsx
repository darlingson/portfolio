import React from 'react';

const SocialMediaContact = () => {
    return (
        <>
            <div className="mx-auto w-1/2 text-white text-center p-4 flex bg-black">
                <div>
                    <a href="https://www.linkedin.com/in/darlingsonm/">
                        <img src='/linkedin_logo_icon_259377.png' className="w-100 h-70" alt="LinkedIn" />
                    </a>
                </div>
                <div>
                    <a href="https://twitter.com/dmakuwila">
                        <img src="/x_twitter_logo_icon_259367.png" className="w-100 h-70" alt="Twitter" />
                    </a>
                </div>
                <div>
                    <a href="https://github.com/darlingson">
                        <img src="/github-logo_icon-icons.com_73546.png" className="w-100 h-70" alt="GitHub" />
                    </a>
                </div>
                <div>
                    <a href="https://www.kaggle.com/datasets/makuwilad">
                        <img src="/kaggle_logo_icon_168474.png" className="w-100 h-70" alt="Kaggle" />
                    </a>
                </div>
                <div>
                    <a href="https://medium.com/@dmakuwila">
                        <img src="/medium_logo_icon_259364.png" className="w-100 h-70" alt="Medium" />
                    </a>
                </div>
            </div>
        </>
    );
}

export default SocialMediaContact;
