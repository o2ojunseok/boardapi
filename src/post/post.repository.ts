import { EntityRepository, Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@EntityRepository(Post)
export class PostRepository extends Repository<Post> {}


// Custom Repository
// @EntityRepository를 기본적으로 사용 기본 Repository클래스를 상속받음
// Custom Repository는 @InjectRepository를 사용하지 않는다. 

// 설명으로 인해 넣어둠

// Entity 의 영속성을 관장하는 역할
// Aggregates를 DTO로 변환하는 작업을 Repository단에서 책임지게 하는것

