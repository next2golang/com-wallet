
import { AboutCommuneItem } from "./AboutCommuneItem";

export const AboutCommuneItemContainer = () => {
    const items = [
        'Terms of Service',
        'Privacy policy',
        'Website'
    ]
    
    const onTermsOfServiceClicked = () => {
        console.log('onTermsOfServiceClicked');
    }
    const onPrivacyPolicyClicked = () => {
        console.log('onPrivacyPolicyClicked');
    }
    const onWebsiteClicked = () => {
        console.log('onWebsiteClicked');
    }

    return (
        <div className="flex flex-col items-center gap-2 w-full mt-16">
            <AboutCommuneItem
                itemTitle="Terms of Service"
                onItemClicked={onTermsOfServiceClicked}
            />
            <AboutCommuneItem
                itemTitle="Privacy policy"
                onItemClicked={onPrivacyPolicyClicked}
            />
            <AboutCommuneItem
                itemTitle="Website"
                onItemClicked={onWebsiteClicked}
            />
        </div>
    )
}
