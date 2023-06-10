import './sources.css';
import { NewsSource } from '../../../types/index';

class Sources {
    draw(data: NewsSource[]): void {
        const fragment = document.createDocumentFragment();
        const sourceItemTemp = document.querySelector<HTMLTemplateElement>('#sourceItemTemp');

        if (sourceItemTemp) {
            data.forEach((item) => {
                const sourceClone = sourceItemTemp.content.cloneNode(true) as DocumentFragment;

                const sourceName = sourceClone.querySelector('.source__item-name');
                if (sourceName instanceof HTMLElement) {
                    sourceName.textContent = item.name;
                }

                const sourceItem = sourceClone.querySelector('.source__item');
                if (sourceItem instanceof HTMLElement) {
                    sourceItem.setAttribute('data-source-id', item.id);
                }

                fragment.append(sourceClone);
            });
        }

        const sourcesContainer = document.querySelector('.sources');
        if (sourcesContainer instanceof Element) {
            sourcesContainer.append(fragment);
        }
    }
}

export default Sources;
