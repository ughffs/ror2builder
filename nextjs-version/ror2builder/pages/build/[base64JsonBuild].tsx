import { useRouter } from 'next/router'
import BuildGroupDisplay from '../../components/buildGroupDisplay/buildGroupDisplay';
import { decode } from '../../shared/buildService';
import { Build } from '../../types/app.type';

const Build = () => {
    const router = useRouter();
    const base64Build = router.query.base64JsonBuild;

    const tmpBuild: Build = {
        buildGroups: [
            {
                heading: 'First Group',
                items: [{ 
                    item: {
                        id: 1,
                        description: 'test',
                        image: 'blerhguhfjsdhf',
                        title: 'Test Title',
                        type: 'common'
                    },
                    stackCount: 2
                }]
            }
        ]
    }

    console.log(JSON.stringify(tmpBuild));

    if (typeof base64Build != "string") {
        return;
    }

    let decodedValue: Build;
    decodedValue = JSON.parse(decode(base64Build));

    console.log(`Base64: ${decodedValue.buildGroups[0].heading}`)


    return (
        <>
            {
                decodedValue.buildGroups.map(group => {
                    const key = decodedValue.buildGroups.indexOf(group);
                    return (
                        <BuildGroupDisplay 
                            key={key} 
                            heading={group.heading} 
                            items={group.items}
                        />
                    )
                })
            }
        </>
    )
}

export default Build;
