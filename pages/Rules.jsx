import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Rules = () => {
    const rules = [
        {
            icon: "🚔",
            title: "No RDM",
            desc: "Prohibido matar sin razón válida de roleplay"
        },
        // ...más reglas
    ];

    return (
        <div className="rules-container">
            {rules.map((rule, index) => (
                <motion.div
                    className="rule-card glassmorphism"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                >
                    {/* Rule content */}
                </motion.div>
            ))}
        </div>
    );
};

export default Rules;
